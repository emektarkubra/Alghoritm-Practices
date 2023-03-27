// BodyMassIndex

/*
Weight: 58 kg

Height: 1,59 m

BMI: 58 / (1,59)*(1,59) = 22,9 kg/m2

    Values between 18,5 kg/m2 and lower values = Weak
    Values between 18,5 and 24,9 kg/m2 = Normal Weight
    Values between 25,0 and 29,9 kg/m2 = Fat
    Values between 30,0 and 34,9 kg/m2 = 1st Degree Obsesity
    Values between 35,0 and 39,9 kg/m2 = 2nd Degree Obsesity
    Values between 40 kg/m2 and higher = 3rd Degree Obsesity
*/

calculationOfBodyMassIndex();

function calculationOfBodyMassIndex() {

    let weight = Number(prompt("Please, enter your weight (kg)"));
    let height = Number(prompt("Please, enter your height (m)"));

    let bodyMassIndex = (weight / (Math.pow(height, 2)));

    if (bodyMassIndex <= 18.5) {
        alert("Your Body Mass Index (BMI): " + Math.round(bodyMassIndex) + " kg/m2 Weak");
    } else if (18.5 < bodyMassIndex <= 24.9) {
        alert("Your Body Mass Index (BMI): " + Math.round(bodyMassIndex) + " kg/m2 Normal Weight");
    } else if (24.9 < bodyMassIndex <= 29.9) {
        alert("Your Body Mass Index (BMI): " + Math.round(bodyMassIndex) + " kg/m2 Normal Fat");
    } else if (29.9 < bodyMassIndex <= 34.9) {
        alert("Your Body Mass Index (BMI): " + Math.round(bodyMassIndex) + " kg/m2 Normal 1st Degree Obesity");
    } else if (34.9 < bodyMassIndex <= 39.9) {
        alert("Your Body Mass Index (BMI): " + Math.round(bodyMassIndex) + " kg/m2 Normal 2nd Degree Obesity")
    } else if (bodyMassIndex >= 40) {
        alert("Your Body Mass Index (BMI): " + Math.round(bodyMassIndex) + " kg/m2 Normal 3rd Degree Obesity");
    } else {
        alert("Please, enter your weight and height!")
    }
}