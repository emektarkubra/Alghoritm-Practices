//FactorialCalculation

// 5.4.3.2.1
// 8.7.6.5.4.3.2.1

let number = prompt("Please, enter a number..");
let carpim = 1;
factorial = "";

if (number >= 0) {
    faktoriyelHesapla();
} else {
    alert("The number is negative!")
}

function faktoriyelHesapla() {

    for (let i = 1; i <= number; i++) {
        carpim *= i;
        factorial += String(i + ".");

    }

    factorial = factorial.substring(0, factorial.length - 1);
    alert(factorial + "! = " + carpim);
}