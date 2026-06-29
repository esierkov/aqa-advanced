const axios = require("axios");

async function fetchUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    return response.data;
  } catch {
    return {
      error: "Failed to fetch user",
    };
  }
}

module.exports = { fetchUser };
