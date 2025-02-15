var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "      500",
        "ok": "      183",
        "ko": "      317"
    },
    "minResponseTime": {
        "total": "      428",
        "ok": "      428",
        "ko": "   60,000"
    },
    "maxResponseTime": {
        "total": "   60,003",
        "ok": "   59,816",
        "ko": "   60,003"
    },
    "meanResponseTime": {
        "total": "   47,187",
        "ok": "   24,989",
        "ko": "   60,001"
    },
    "standardDeviation": {
        "total": "   19,904",
        "ok": "   17,470",
        "ko": "        1"
    },
    "percentiles1": {
        "total": "   60,001",
        "ok": "   20,521",
        "ko": "   60,002"
    },
    "percentiles2": {
        "total": "   60,002",
        "ok": "   40,384",
        "ko": "   60,002"
    },
    "percentiles3": {
        "total": "   60,002",
        "ok": "   55,881",
        "ko": "   60,002"
    },
    "percentiles4": {
        "total": "   60,003",
        "ok": "   59,376",
        "ko": "   60,003"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 0.6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 0.4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 178,
    "percentage": 35.6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 317,
    "percentage": 63.4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "     5.81",
        "ok": "     2.13",
        "ko": "     3.69"
    }
},
contents: {
"req_create-order-205845290": {
        type: "REQUEST",
        name: "Create Order",
path: "Create Order",
pathFormatted: "req_create-order-205845290",
stats: {
    "name": "Create Order",
    "numberOfRequests": {
        "total": "      500",
        "ok": "      183",
        "ko": "      317"
    },
    "minResponseTime": {
        "total": "      428",
        "ok": "      428",
        "ko": "   60,000"
    },
    "maxResponseTime": {
        "total": "   60,003",
        "ok": "   59,816",
        "ko": "   60,003"
    },
    "meanResponseTime": {
        "total": "   47,187",
        "ok": "   24,989",
        "ko": "   60,001"
    },
    "standardDeviation": {
        "total": "   19,904",
        "ok": "   17,470",
        "ko": "        1"
    },
    "percentiles1": {
        "total": "   60,001",
        "ok": "   20,521",
        "ko": "   60,002"
    },
    "percentiles2": {
        "total": "   60,002",
        "ok": "   40,384",
        "ko": "   60,002"
    },
    "percentiles3": {
        "total": "   60,002",
        "ok": "   55,881",
        "ko": "   60,002"
    },
    "percentiles4": {
        "total": "   60,003",
        "ok": "   59,376",
        "ko": "   60,003"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 3,
    "percentage": 0.6
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 0.4
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 178,
    "percentage": 35.6
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 317,
    "percentage": 63.4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "     5.81",
        "ok": "     2.13",
        "ko": "     3.69"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
