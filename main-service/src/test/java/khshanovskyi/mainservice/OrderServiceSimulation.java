package khshanovskyi.mainservice;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import java.time.Duration;
import java.util.Iterator;
import java.util.Map;
import java.util.Random;
import java.util.function.Supplier;
import java.util.stream.Stream;

public class OrderServiceSimulation extends Simulation {

    Random random = new Random();

    HttpProtocolBuilder httpProtocol = http
            .baseUrl("http://localhost:8091")
            .header("Content-Type", "application/json")
            .header("Accept", "application/json");

    Iterator<Map<String, Object>> orderFeeder = Stream.generate((Supplier<Map<String, Object>>) () ->
            Map.of(
                    "item", "item-" + random.nextInt(100),
                    "quantity", random.nextInt(5) + 1,
                    "price", Math.round(random.nextDouble() * 100),
                    "username", "user-" + random.nextInt(1000)
            )).iterator();

    ChainBuilder createOrder = feed(orderFeeder)
            .exec(http("Create Order")
                    .post("/v1/api/order")
                    .body(StringBody("""
                            {"item":"#{item}","quantity":#{quantity},"price":#{price},"username":"#{username}"}"""))
                    .asJson()
                    .check(status().in(200, 201))
            )
            .pause(Duration.ofSeconds(1));

//    ScenarioBuilder parallelUsersScenario = scenario("5 Parallel Users Test")
//            .exec(createOrder);

    ScenarioBuilder rampUsersScenario = scenario("Ramping Users Test")
            .exec(createOrder);

//    {
//        setUp(
//                // Scenario 1: 10 parallel users
//                parallelUsersScenario.injectOpen(
//                        atOnceUsers(5)
//                ),
//
//                // Scenario 2: Ramping from 10 to 20, then 20 to 50 users
//                rampUsersScenario.injectClosed(
//                        rampConcurrentUsers(10).to(20).during(Duration.ofSeconds(30)),
//                        rampConcurrentUsers(20).to(50).during(Duration.ofSeconds(30))
//                )
//        ).protocols(httpProtocol);
//    }

    {
        setUp(
                rampUsersScenario.injectOpen(
                        nothingFor(3),
                        rampUsersPerSec(10).to(30).during(3),
                        constantUsersPerSec(10).during(5),
                        nothingFor(5),
                        rampUsersPerSec(10).to(50).during(3),
                        nothingFor(3),
                        rampUsersPerSec(30).to(70).during(6)
                ).protocols(httpProtocol)
        );
    }


}
