const axios = require("axios");
const { fetchUser } = require("../js-practice/lesson15/task3");

jest.mock("axios");

describe("Mocking Axios in Jest", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should return user data when request is successful", async () => {
    const mockUser = {
      id: 1,
      name: "Leanne Graham",
    };

    axios.get.mockResolvedValue({
      data: mockUser,
    });

    const result = await fetchUser();

    expect(result).toEqual(mockUser);

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users/1",
    );
  });

  test("should return an error object when request fails", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    const result = await fetchUser();

    expect(result).toEqual({
      error: "Failed to fetch user",
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
