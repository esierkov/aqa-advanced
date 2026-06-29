const axios = require("axios");

async function getUserData() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
    {
      headers: {
        "X-Custom-Header": "my-test-header",
        Authorization: "Bearer 12345",
      },
      params: {
        id: 5,
        active: true,
      },
    },
  );

  return response;
}

module.exports = { getUserData };
