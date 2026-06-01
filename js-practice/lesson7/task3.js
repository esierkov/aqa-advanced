function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Обидва аргументи повинні бути числами");
    }

    if (denominator === 0) {
        throw new Error("Ділення на нуль неможливе");
    }

    return numerator / denominator;
}

// case 1: expected data
try {
    const result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

// case2: denominator is 0
try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

// case 3: numerator is not a number
try {
    const result = divide("10", 2);
    console.log(result);
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}