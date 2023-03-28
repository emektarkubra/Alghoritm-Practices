// Perfect Number

/*
    "Perfect Number"
    The sum of the positive divisors of positive integers is equal to two times of the number itself.

    6 -> 1 + 2 + 3 + 6 = 12

 */


let number = prompt("Please, enter a number..");

let result = sumOfDivisors();


if (result == number * 2 && number > 0) {
    alert("Perfect number");
} else if (result == "") {
    alert("Please, enter the valid number");
} else {
    alert("Not a perfect number");
}


function sumOfDivisors() {
    let total = 0;

    for (let i = 1; i <= number; i++) {

        if (number % i == 0) {
            total += i;
        }
    }

    return total;
}