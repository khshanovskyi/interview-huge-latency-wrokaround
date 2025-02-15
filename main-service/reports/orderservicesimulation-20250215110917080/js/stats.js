var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "      500",
        "ok": "      500",
        "ko": "        0"
    },
    "minResponseTime": {
        "total": "      114",
        "ok": "      114",
        "ko": "        -"
    },
    "maxResponseTime": {
        "total": "   29,403",
        "ok": "   29,403",
        "ko": "        -"
    },
    "meanResponseTime": {
        "total": "   10,446",
        "ok": "   10,446",
        "ko": "        -"
    },
    "standardDeviation": {
        "total": "    9,208",
        "ok": "    9,208",
        "ko": "        -"
    },
    "percentiles1": {
        "total": "    6,800",
        "ok": "    6,800",
        "ko": "        -"
    },
    "percentiles2": {
        "total": "   19,101",
        "ok": "   19,101",
        "ko": "        -"
    },
    "percentiles3": {
        "total": "   26,601",
        "ok": "   26,601",
        "ko": "        -"
    },
    "percentiles4": {
        "total": "   28,922",
        "ok": "   28,922",
        "ko": "        -"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 51,
    "percentage": 10.2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 19,
    "percentage": 3.8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 430,
    "percentage": 86.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "     9.09",
        "ok": "     9.09",
        "ko": "        -"
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
        "ok": "      500",
        "ko": "        0"
    },
    "minResponseTime": {
        "total": "      114",
        "ok": "      114",
        "ko": "        -"
    },
    "maxResponseTime": {
        "total": "   29,403",
        "ok": "   29,403",
        "ko": "        -"
    },
    "meanResponseTime": {
        "total": "   10,446",
        "ok": "   10,446",
        "ko": "        -"
    },
    "standardDeviation": {
        "total": "    9,208",
        "ok": "    9,208",
        "ko": "        -"
    },
    "percentiles1": {
        "total": "    6,800",
        "ok": "    6,800",
        "ko": "        -"
    },
    "percentiles2": {
        "total": "   19,101",
        "ok": "   19,101",
        "ko": "        -"
    },
    "percentiles3": {
        "total": "   26,601",
        "ok": "   26,601",
        "ko": "        -"
    },
    "percentiles4": {
        "total": "   28,922",
        "ok": "   28,922",
        "ko": "        -"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 51,
    "percentage": 10.2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 19,
    "percentage": 3.8
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 430,
    "percentage": 86.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "     9.09",
        "ok": "     9.09",
        "ko": "        -"
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
