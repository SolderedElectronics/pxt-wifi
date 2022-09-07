{
    WiFiBit.connectToWiFiBit()
    basic.pause(3000)
    WiFiBit.connectToWiFiNetwork("SSID", "key")
    WiFiBit.executeAtCommand("ATE0", 1000)
    WiFiBit.changeHttpMethodWaitPeriod(500)
    WiFiBit.executeHttpMethod(
        HttpMethod.GET,
        "blynk-cloud.com",
        80,
        "/14dabda3551b4dd5ab46464af582f7d2/update/A0?value=205"
    )
    WiFiBit.writeBlynkPinValue(
        "510",
        "A0",
        "14dabda3551b4dd5ab46464af582f7d2"
    )
    let pinValue = "Pin A0:"
        + WiFiBit.newline()
        + WiFiBit.readBlynkPinValue(
            "A0",
            "14dabda3551b4dd5ab46464af582f7d2"
        )
    WiFiBit.writeBlynkIoTPinValue(
        "1",
        "V1",
        "BzMEzpZ9Bud9ZUXZoJVEkbfneCavDVDx"
    )
    pinValue = "Pin V1:"
        + WiFiBit.newline()
        + WiFiBit.readBlynkIoTPinValue(
            "V1",
            "BzMEzpZ9Bud9ZUXZoJVEkbfneCavDVDx"
        )
    WiFiBit.disconnectFromWiFiNetwork()
}
