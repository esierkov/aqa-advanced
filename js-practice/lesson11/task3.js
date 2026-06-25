async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    return await response.json();
  } catch (error) {
    console.error("Помилка отримання Todo:", error);
    throw error;
  }
}

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    return await response.json();
  } catch (error) {
    console.error("Помилка отримання User:", error);
    throw error;
  }
}

const allPromises = Promise.all([getTodo(), getUser()]);

const racePromise = Promise.race([getTodo(), getUser()]);

allPromises
  .then((result) => {
    console.log("Promise.all result:");
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

racePromise
  .then((result) => {
    console.log("Promise.race result:");
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
