// Is number odd or even?


evenOrOddNumber();

function evenOrOddNumber() {

    let number = prompt("Please, enter the number..");

    if (number % 2 == 0) {
        alert("Entered number is even number..");
    } else {
        alert("Entered number is odd number..");
    }
}