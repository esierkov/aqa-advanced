function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log("Is Person Adult: " + isAdult(25));
console.log("Is Person Adult: " + isAdult(15));