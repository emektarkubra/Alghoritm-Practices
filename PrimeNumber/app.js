// Prime Number

// Prime numbers can only be divided by itself and 1.

// 7   ->   1 7
// 14  ->   1 2 7 14


let number = prompt("Please, enter a number..");
primeNumber(number);

function primeNumber(number) {
    let counter = 0;
    for (let i = 2; i < number; i++) {

        if (number % i == 0) {
            counter++;
        }
    }
    if (counter == 0 && number != 1 && number > 0) {
        alert("Prime Number.");
    } else {
        alert("Not a Prime Number");
    }
}