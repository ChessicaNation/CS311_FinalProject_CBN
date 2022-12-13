let fromUnit = "";
let toUnit = "";
let value = "";
let result = "";

function convertButton(containerID){

    //getting the elements inside the container that is passed in as an argument
    result = document.querySelector("#" + containerID);

    //getting which unit was selected as the from and, by default, which was left as the to
    const radioList = result.querySelectorAll("#from");
    for (let radio of radioList){
        if (radio.checked){
            fromUnit = radio.value;
        }//end if
        if (!radio.checked){
            toUnit = radio.value;
        }//end if
    }//end for loop

    //getting the value entered by the user
    value = result.querySelector("input[type=text]").value;

    //performing conversion formulas based on which from unit was selected
    //and using helper function to display the results
    switch (fromUnit){
        case "Meters":
            displayResults(value * 3.28084);
            break;
        case "Feet":
            displayResults(value / 3.28084);
            break;
        case "Kilometers":
            displayResults(value / 1.609344);
            break;
        case "Miles":
            displayResults(value * 1.609344);
            break;
        case "Celsius":
            displayResults((value * 1.8) + 32);
            break;
        case "Fahrenheit":
            displayResults((value - 32) / 1.8);
            break;
        case "Kilograms":
            displayResults(value * 2.2);
            break;
        case "Pounds":
            displayResults(value / 2.2);
            break;
        case "Grams":
            displayResults(value * .035274);
            break;
        case "Ounces":
            displayResults(value / .035274);
            break;
    }//end switch  
}//end convertButton

function displayResults(formula){
    result.querySelector("span").innerHTML = (formula) + " " + toUnit;
}//end displayResults

