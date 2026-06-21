function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json());
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => response.json());
}

const allPromises = Promise.all([
    getTodo(),
    getUser()
]);

const racePromise = Promise.race([
    getTodo(),
    getUser()
]);

allPromises
    .then(results => {
        console.log("Promise.all result:");
        console.log(results);
    })
    .catch(error => {
        console.error("Promise.all error:", error);
    });

racePromise
    .then(result => {
        console.log("Promise.race result:");
        console.log(result);
    })
    .catch(error => {
        console.error("Promise.race error:", error);
    });