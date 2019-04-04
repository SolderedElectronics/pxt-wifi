# pxt-wifi
MakeCode extension for [WiFi:bit](https://e-radionica.com/en/wifi-bit.html):
<br/>
![alt text](icon.png "WiFi:bit")
<br/>
It's used for connecting to the Internet or local network through WiFi connection. You can send or receive information by using HTTP methods or AT commands. WiFi:bit can also be used as breakout board (edge connector).
<br/>
## Commands
### Connect to WiFi:bit
![alt text](/images/01%20-%20connectToWiFiBit.png "connectToWiFiBit()")
<br/>
Makes a serial connection between micro:bit and WiFi:bit. You should put it in a start block of every WiFi:bit project.
<br/>
### Connect to WiFi network
![alt text](/images/02%20-%20connectToWiFiNetwork.png "connectToWiFiNetwork()")
<br/>
Connects WiFi:bit to WiFi network. You should execute it only once. Next time WiFi:bit will connect automatically.
<br/>
### Disconnect from WiFi network
![alt text](/images/03%20-%20disconnectFromWifiNetwork.png "disconnectFromWifiNetwork()")
<br/>
Disconnects WiFi:bit from WiFi network. You need this command only if you're paranoid. :)
<br/>
### Execute AT command
![alt text](/images/04%20-%20executeAtCommand.png "executeAtCommand()")
<br/>
Executes AT command. It's for power users, for total control or cases which can't be covered with other commands. [List of AT commands.](https://room-15.github.io/blog/2015/03/26/esp8266-at-command-reference/)
<br/>
### Execute HTTP method
![alt text](/images/05%20-%20executeHttpMethod.png "executeHttpMethod()")
<br/>
Main command of this extension. It's used for data sending, changing, deleting and fetching by using some of the [HTTP methods](https://www.tutorialspoint.com/http/http_methods.htm). This is basic form of command. You can expand it with optional parameters (body and headers).
<br/>
### Blynk: write pin value
![alt text](/images/06%20-%20writePinValue.png "writePinValue()")
<br/>
Write Blynk pin value. [Blynk](https://blynk.io/) is popular IoT service. This command simplifies its usage with WiFi:bit projects.
<br/>
### Blynk: read pin value
![alt text](/images/07%20-%20readPinValue.png "readPinValue()")
<br/>
Read Blynk pin value. [Blynk](https://blynk.io/) is popular IoT service. This command simplifies its usage with WiFi:bit projects.
<br/>
### Newline
![alt text](/images/08%20-%20newline.png "newline()")
<br/>
Line separator. It's used in multiline body and headers. You should put it between each pair of lines.
<br/>
### Change HTTP method wait period
![alt text](/images/09%20-%20changeHttpMethodWaitPeriod.png "changeHttpMethodWaitPeriod()")
<br/>
Changes HTTP method wait period. It's for power users and available only in JavaScript part of MakeCode. By defaut HTTP method execution time is cca. 15 seconds. That's OK for almost all networks. If you have good network you can reduce execution time. Default input value is 1000. If you, for example, set it to 500 execution will be twice faster. You can also slow execution by setting a value which is greater than 1000.
<br/>
## Examples
### Connect to the Internet
![alt text](/images/example1.png "Connect to the Internet")
<br/>
### Send dice value to ThingSpeak
![alt text](/images/example2.png "Send dice value to ThingSpeak")
<br/>
### Send some data to Beebotte
![alt text](/images/example3.png "Send some data to Beebotte")
<br/>
### Read and write Blynk pin values
![alt text](/images/example4.png "Read and write Blynk pin values")
<br/>
For explanation of examples and more details, check [official tutorial](https://e-radionica.com/en/blog/using-wifibit-with-the-official-makecode-extension-pxt-wifibit/).
<br/>
<br/>
## License
MIT License
<br/>
<br/>
## Supported targets

* for PXT/microbit
