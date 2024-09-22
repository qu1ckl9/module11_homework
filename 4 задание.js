function printNumbers(from, to) {
    let current = from;

    // Проверка на случай, если from больше to
    if (from > to) {
        console.log("Начальное значение больше конечного.");
        return;
    }

    let timerId = setInterval(function() {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 15);
