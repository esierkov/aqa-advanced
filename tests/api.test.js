const { fetchData } = require("../js-practice/lesson15/task1");

describe("Axios error handling test", () => {
  test("should return an error message on a failed request", async () => {
    const result = await fetchData();

    expect(result).toBe("Error: Failed to retrieve data");
  });
});
