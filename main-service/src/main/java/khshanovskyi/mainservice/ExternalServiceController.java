package khshanovskyi.mainservice;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

import static org.springframework.http.MediaType.APPLICATION_JSON;

@RestController
@RequestMapping("/v1/api")
@Slf4j
public class ExternalServiceController {

    record Order(String item, int quantity, double price, String username) {}
    enum OrderStatus {SUCCESS, FAILED}
    record OrderRes(String orderId , OrderStatus status, String errorMessage) {}

    @PostMapping("/order")
    public String order(@RequestBody Order order) {
        log.info("Creating order for {}", order.toString());
        OrderRes orderRes = RestClient.create().post()
                .uri("http://localhost:8090/v1/api/order")
                .contentType(APPLICATION_JSON)
                .body(order)
                .retrieve()
                .toEntity(OrderRes.class)
                .getBody();
        log.info("Order {} status is {}", order.toString(), orderRes.status);

        if (orderRes.status == OrderStatus.FAILED) {
            return orderRes.errorMessage;
        }

        return orderRes.orderId;
    }

    @GetMapping()
    public String orders() {
        return "hello";
    }
}
