import mqtt from "mqtt";

const clientId = "mqttx_c6237596";
const username = "andy";
const password = "1560";
const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt", {
  clientId,
  username,
  password,
  // ...other options
});

client.on("connect", () => {
  console.log("Connected to MQTT broker");
});

client.on("error", (error) => {
  console.error("Error connecting to MQTT broker:", error);

  if (error.message.includes("WebSocket connection failed")) {
    console.error(
      "WebSocket connection failed. Check network or broker status."
    );
  } else if (error.message.includes("Connection refused")) {
    console.error(
      "Connection refused. Check broker address or security settings."
    );
  }
});

export default client;
