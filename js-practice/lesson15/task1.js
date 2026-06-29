const axios = require("axios");

async function fetchData() {
  try {
    await axios.get("https://jsonplaceholder.typicode.com/invalid-url");
  } catch {
    return "Error: Failed to retrieve data";
  }
}

module.exports = { fetchData };
