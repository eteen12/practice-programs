require("dotenv").config();

const axios = require("axios");

const symbol = process.argv[2];
if (!symbol) {
  console.log("Usage: node stockprice.js <symbol>");
  process.exit(1);
}

const key = process.env.FINNHUB_KEY;
const url = `https://finnhub.io/api/v1/quote?symbol=${symbol.toUpperCase()}&token=${key}`;

async function getPrice() {
  try {
    const response = await axios.get(url);
    const { c: current, h: high, l: low, o: open } = response.data;

    if (current) {
      console.log(`${symbol.toUpperCase()} Price: $${current}`);
      console.log(`🔼 High: $${high} | 🔽 Low: $${low}`);
      console.log(`🚀 Open: $${open}`);
    } else {
      console.log(`No data found for that symbol sorry bud`);
    }
  } catch (error) {
    console.log("Error fetching stock price:", error);
  }
}

getPrice();

//https://www.npmjs.com/package/finnhub
