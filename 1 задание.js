function checkEvenOrOdd(input) {
    let number = +input;
    if (typeof number === 'number' && !isNaN(number)) {
        if (number % 2 === 0) {
            console.log("Число четное.");
        } else {
            console.log("Число нечётное.");
        }
    } else {
        console.log("Упс, кажется, вы ошиблись.");
    }
}
let userInput = prompt("Введите значение:");
checkEvenOrOdd(userInput);