const axios = require("axios");
const { getUserData } = require("../js-practice/lesson15/task2");

jest.mock("axios");

describe("Testing Request Headers and Params", () => {
  test("should send correct headers and params", async () => {
    axios.get.mockResolvedValue({
      data: {
        name: "John",
      },
    });

    await getUserData();

    expect(axios.get).toHaveBeenCalledWith(
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
  });
});
