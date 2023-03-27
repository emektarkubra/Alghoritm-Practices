// Finding of entered number is negative or positive 

negativeOrPositive();


function negativeOrPositive() {

    let number = prompt("Please, enter the number..");

    if (number > 0) {
        alert("Entered number is positive");
    } else if (number < 0) {
        alert("Entered number is negative");
    } else if (number == 0) {
        alert("Neither positive nor negative");
    } else {
        alert("Please enter a valid number!");
    }
}