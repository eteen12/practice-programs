require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_NUMBER;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "hello ethan",
    from: "+12282830234",
    to: "+17785819151",
  })
  .then((message) => console.log(message.sid))
  .done();
