function printTextWithDelay(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

printTextWithDelay("Hello, World!", 3000);