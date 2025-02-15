package khshanovskyi.externalservice;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static org.springframework.http.MediaType.APPLICATION_JSON;

@RestController
@RequestMapping("/v1/api")
@Slf4j
public class OrderController {

    record Order(String item, int quantity, double price, String username) {}
    enum OrderStatus {SUCCESS, FAILED}
    record OrderRes(String orderId , OrderStatus status, String errorMessage) {}

    private final Map<String, Order> orders = new HashMap<>();

    @PostMapping("/order")
    public OrderRes order(@RequestBody Order order) {
        return addOrder(order);
    }

    @SneakyThrows
    //BOTTLENECK, only ONE request allowed
    private synchronized OrderRes addOrder(Order order) {
        String orderId = UUID.randomUUID().toString();
        log.info("Creating the order {}...", orderId);
        // some logic...
        Thread.sleep(400);

        orders.put(orderId, order);

        log.info("Order {} is successfully created", orderId);
        return new OrderRes(orderId, OrderStatus.SUCCESS, "");
    }
}
