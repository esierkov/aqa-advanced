const axios = require("axios");

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

api.interceptors.request.use((config) => {
  console.log(`REQUEST: ${config.method.toUpperCase()} ${config.url}`);

  return config;
});

api.interceptors.response.use((response) => {
  console.log(`RESPONSE: ${response.status} ${response.config.url}`);

  return response;
});

describe("JSONPlaceholder API tests", () => {
  test("GET /posts/1", async () => {
    const response = await api.get("/posts/1");

    expect(response.status).toBe(200);

    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty("userId");
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
  });

  test("GET /posts", async () => {
    const response = await api.get("/posts");

    expect(response.status).toBe(200);

    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBe(100);
  });

  test("GET /users/1", async () => {
    const response = await api.get("/users/1");

    expect(response.status).toBe(200);

    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("email");
    expect(response.data).toHaveProperty("address");
  });

  test("POST /posts", async () => {
    const requestBody = {
      title: "test",
      body: "test",
      userId: 1,
    };

    const response = await api.post("/posts", requestBody);

    expect(response.status).toBe(201);

    expect(response.data).toMatchObject({
      title: requestBody.title,
      body: requestBody.body,
      userId: requestBody.userId,
    });

    expect(response.data).toHaveProperty("id");
  });

  test("POST /comments", async () => {
    const requestBody = {
      postId: 1,
      name: "QA",
      email: "qa@test.com",
      body: "comment",
    };

    const response = await api.post("/comments", requestBody);

    expect(response.status).toBe(201);

    expect(response.data).toMatchObject(requestBody);

    expect(response.data).toHaveProperty("id");
  });
});
