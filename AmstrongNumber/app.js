// AmstrongNumber

/*
    Numbers with the sum of the cubes of their digits equal to themselves are called Armstrong numbers.
    407 için -> (4*4*4)+(7*7*7)=407
*/

let number = prompt("Please, enter a number..");
let toplam = 0;

amstrongNumber();

function amstrongNumber() {

    for (let i = 0; i < number.length; i++) {
        toplam += Math.pow(number.charAt(i), 3);
    }
    if (parseInt(number) == toplam) {
        alert("Amstrong number");
    } else {
        alert("Not a Amstrong number.")
    }

}
