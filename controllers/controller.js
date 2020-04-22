// setting divs for info 'about'
var collapsibleStart = document.getElementById('collapsibleStartID');
var collapsibleCarID = document.getElementById('collapsibleCarID');
var collapsibleWheels = document.getElementById('collapsibleWheelsID');
var collapsibleSuccess = document.getElementById('row3');
var footer = document.getElementById('footer');
var collapsibleAbout = document.getElementById('collapsibleAbout');
// hides all collapsibles then shows collapsible 'about'.
footer.addEventListener('mouseover', showAbout);
footer.addEventListener('mouseout', hideAbout);
function showAbout() {
    collapsibleStart.classList.remove('show');
    collapsibleCarID.classList.remove('show');
    collapsibleWheels.classList.remove('show');
    collapsibleSuccess.classList.remove('show');
    collapsibleAbout.classList.add('show');
}
function hideAbout() {
    collapsibleAbout.classList.remove('show');
    collapsibleStart.classList.add('show');
}
// ---------------------------------------------- //
// landing page
function start() {
    var collapsibleStart = document.getElementById('collapsibleStartID');
    var collapsibleCarID = document.getElementById('collapsibleCarID');
    collapsibleStart.classList.remove('show');
    collapsibleCarID.classList.add('show');
}
// ********** ********** //
var arrCars = new Array();
// ********** ********** //
function CreateCar() {
    // plate, brand & color validation only
    var inputPlate = document.getElementById('inputPlate');
    var plateError = document.getElementById('plateError');
    var inputBrand = document.getElementById('inputBrand');
    var brandError = document.getElementById('brandError');
    var inputColor = document.getElementById('inputColor');
    var colorError = document.getElementById('colorError');
    var collapsibleCar = document.getElementById('collapsibleCarID');
    var collapsibleWheels = document.getElementById('collapsibleWheelsID');
    var i = 0;
    var errors = 0;
    inputPlate.classList.remove('is-invalid');
    inputBrand.classList.remove('is-invalid');
    inputColor.classList.remove('is-invalid');
    // input plate validation
    var plateRegEx = new RegExp(/(^\d{4})([A-Z]{3})/);
    // (^\d{4})([A-Z]{3}) to be improved. Returns true when finds 3 or more [A-Z].
    // 
    inputPlate.value.replace(/ /g, "");
    inputPlate.value = inputPlate.value.toUpperCase();
    if (inputPlate.value == '') {
        inputPlate.classList.add('error');
        inputPlate.classList.add("is-invalid");
        plateError.textContent = 'Plate number is required.';
        errors++;
    }
    else if (plateRegEx.test(inputPlate.value) === false) {
        inputPlate.classList.add('error');
        inputPlate.classList.add("is-invalid");
        plateError.textContent = 'Plate must be 4 digits plus 3 letters. ex 1234ABC';
        errors++;
    }
    console.log(plateRegEx.test(inputPlate.value));
    if ((plateRegEx.test(inputPlate.value)) != false) {
        // search for existent plate matching inputPlate
        for (i = 0; i < arrCars.length; i++) {
            if (inputPlate.value == arrCars[i].plate.value) {
                inputPlate.classList.add('error');
                inputPlate.classList.add("is-invalid");
                plateError.textContent = "Plate '" + inputPlate.value + "' is already registered.";
                errors++;
            }
        }
    }
    // inputBrand validation
    if (inputBrand.value == '') {
        inputBrand.classList.add('is-invalid');
        brandError.textContent = "Brand is required.";
        errors++;
    }
    else if (inputBrand.value.length < 3) {
        inputBrand.classList.add('error');
        inputBrand.classList.add('is-invalid');
        brandError.textContent = "Brand must be at least 3 characters long.";
        errors++;
    }
    // color validation
    if (inputColor.value == '') {
        inputBrand.classList.add('error');
        inputColor.classList.add('is-invalid');
        colorError.textContent = "Color is required.";
        errors++;
    }
    else if (inputColor.value.length < 3) {
        inputBrand.classList.add('error');
        inputColor.classList.add('is-invalid');
        colorError.textContent = "Color must be at least 3 characters long.";
        errors++;
    }
    // final validation
    if (errors > 0) {
        return false;
    }
    else {
        // hide collapsible car
        collapsibleCar.classList.remove('show');
        // shows collapsible Wheels
        collapsibleWheels.classList.add('show');
        // return false;
    }
}
// ================ CREATE WHEELS ================ //
function createWheels() {
    // SETTING DIVS FOR .invalid-feedback
    var wheel_1_Brand = document.getElementById('wheel_1_Brand');
    var wheel_1_Diameter = document.getElementById('wheel_1_Diameter');
    var wheel_2_Brand = document.getElementById('wheel_2_Brand');
    var wheel_2_Diameter = document.getElementById('wheel_2_Diameter');
    var wheel_3_Brand = document.getElementById('wheel_3_Brand');
    var wheel_3_Diameter = document.getElementById('wheel_3_Diameter');
    var wheel_4_Brand = document.getElementById('wheel_4_Brand');
    var wheel_4_Diameter = document.getElementById('wheel_4_Diameter');
    var wheel_1_BrandError = document.getElementById('wheel_1_BrandError');
    var wheel_1_DiameterError = document.getElementById('wheel_1_DiameterError');
    var wheel_2_BrandError = document.getElementById('wheel_2_BrandError');
    var wheel_2_DiameterError = document.getElementById('wheel_2_DiameterError');
    var wheel_3_BrandError = document.getElementById('wheel_3_BrandError');
    var wheel_3_DiameterError = document.getElementById('wheel_3_DiameterError');
    var wheel_4_BrandError = document.getElementById('wheel_4_BrandError');
    var wheel_4_DiameterError = document.getElementById('wheel_4_DiameterError');
    var collapsibleWheels = document.getElementById('collapsibleWheelsID');
    var collapsibleSuccess = document.getElementById('row3');
    // SETTING DIVS FOR PRINTING CAR INFO AFTER SUCCESFUL REGISTRATION
    var carInfo = document.getElementById('carInfo');
    var InfoWheel1 = document.getElementById('InfoWheel1');
    var InfoWheel2 = document.getElementById('InfoWheel2');
    var InfoWheel3 = document.getElementById('InfoWheel3');
    var InfoWheel4 = document.getElementById('InfoWheel4');
    var outputDivs = [InfoWheel1, InfoWheel2, InfoWheel3, InfoWheel4];
    // SETTING CAR INPUTS
    var inputPlate = document.getElementById('inputPlate');
    var inputBrand = document.getElementById('inputBrand');
    var inputColor = document.getElementById('inputColor');
    //REMOVES .is-invalid FROM PREVIOUS FAILED VALIDATIONS
    wheel_1_Brand.classList.remove('is-invalid');
    wheel_1_Diameter.classList.remove('is-invalid');
    wheel_2_Brand.classList.remove('is-invalid');
    wheel_2_Diameter.classList.remove('is-invalid');
    wheel_3_Brand.classList.remove('is-invalid');
    wheel_3_Diameter.classList.remove('is-invalid');
    wheel_4_Brand.classList.remove('is-invalid');
    wheel_4_Diameter.classList.remove('is-invalid');
    // errors counter for final validation
    var errors = 0;
    // wheel 1 validation
    if (wheel_1_Brand.value == '') {
        wheel_1_Brand.classList.add('error');
        wheel_1_Brand.classList.add('is-invalid');
        wheel_1_BrandError.textContent = "Brand is required.";
        errors++;
    }
    else if (wheel_1_Brand.value.length < 3) {
        wheel_1_Brand.classList.add('error');
        wheel_1_Brand.classList.add('is-invalid');
        wheel_1_BrandError.textContent = "Brand must be at least 3 characters long.";
        errors++;
    }
    if (wheel_1_Diameter.value == '') {
        wheel_1_Diameter.classList.add('error');
        wheel_1_Diameter.classList.add('is-invalid');
        wheel_1_DiameterError.textContent = "Diameter is required.";
        errors++;
    }
    if (parseFloat(wheel_1_Diameter.value) < 0.4 || parseFloat(wheel_1_Diameter.value) > 2) {
        wheel_1_Diameter.classList.add('error');
        wheel_1_Diameter.classList.add('is-invalid');
        wheel_1_DiameterError.textContent = "Diameter must be: min 0.4 - max 2";
        errors++;
    }
    // Wheel 2 validation
    if (wheel_2_Brand.value == '') {
        wheel_2_Brand.classList.add('error');
        wheel_2_Brand.classList.add('is-invalid');
        wheel_2_BrandError.textContent = "Brand is required.";
        errors++;
    }
    else if (wheel_2_Brand.value.length < 3) {
        wheel_2_Brand.classList.add('error');
        wheel_2_Brand.classList.add('is-invalid');
        wheel_2_BrandError.textContent = "Brand must be at least 3 characters long.";
        errors++;
    }
    if (wheel_2_Diameter.value == '') {
        wheel_2_Diameter.classList.add('error');
        wheel_2_Diameter.classList.add('is-invalid');
        wheel_2_DiameterError.textContent = "Diameter is required.";
        errors++;
    }
    if (parseFloat(wheel_2_Diameter.value) < 0.4 || parseFloat(wheel_2_Diameter.value) > 2) {
        wheel_2_Diameter.classList.add('error');
        wheel_2_Diameter.classList.add('is-invalid');
        wheel_2_DiameterError.textContent = "Diameter must be: min 0.4 - max 2";
        errors++;
    }
    // Wheel 3 validation
    if (wheel_3_Brand.value == '') {
        wheel_3_Brand.classList.add('error');
        wheel_3_Brand.classList.add('is-invalid');
        wheel_3_BrandError.textContent = "Brand is required.";
        errors++;
    }
    else if (wheel_3_Brand.value.length < 3) {
        wheel_3_Brand.classList.add('error');
        wheel_3_Brand.classList.add('is-invalid');
        wheel_3_BrandError.textContent = "Brand must be at least 3 characters long.";
        errors++;
    }
    if (wheel_3_Diameter.value == '') {
        wheel_3_Diameter.classList.add('error');
        wheel_3_Diameter.classList.add('is-invalid');
        wheel_3_DiameterError.textContent = "Diameter is required.";
        errors++;
    }
    if (parseFloat(wheel_3_Diameter.value) < 0.4 || parseFloat(wheel_3_Diameter.value) > 2) {
        wheel_3_Diameter.classList.add('error');
        wheel_3_Diameter.classList.add('is-invalid');
        wheel_3_DiameterError.textContent = "Diameter must be: min 0.4 - max 2";
        errors++;
    }
    // Wheel 4 validation
    if (wheel_4_Brand.value == '') {
        wheel_4_Brand.classList.add('error');
        wheel_4_Brand.classList.add('is-invalid');
        wheel_4_BrandError.textContent = "Brand is required.";
        errors++;
    }
    else if (wheel_4_Brand.value.length < 3) {
        wheel_4_Brand.classList.add('error');
        wheel_4_Brand.classList.add('is-invalid');
        wheel_4_BrandError.textContent = "Brand must be at least 3 characters long.";
        errors++;
    }
    if (wheel_4_Diameter.value == '') {
        wheel_4_Diameter.classList.add('error');
        wheel_4_Diameter.classList.add('is-invalid');
        wheel_4_DiameterError.textContent = "Diameter is required.";
        errors++;
    }
    if (parseFloat(wheel_4_Diameter.value) < 0.4 || parseFloat(wheel_4_Diameter.value) > 2) {
        wheel_4_Diameter.classList.add('error');
        wheel_4_Diameter.classList.add('is-invalid');
        wheel_4_DiameterError.textContent = "Diameter must be: min 0.4 - max 2";
        errors++;
    }
    if (errors > 0) {
        return false;
    }
    else {
        // INSTANCE OBJECT CAR //
        inputPlate.value = inputPlate.value.toUpperCase();
        inputBrand.value = inputBrand.value.toUpperCase();
        inputColor.value = inputColor.value.toUpperCase();
        console.log(inputPlate.value, inputBrand.value, inputColor.value);
        var newCar = new Car(inputPlate.value, inputColor.value, inputBrand.value);
        // ADD WHEELS TO CAR
        wheel_1_Brand.value = wheel_1_Brand.value.toUpperCase();
        wheel_2_Brand.value = wheel_2_Brand.value.toUpperCase();
        wheel_3_Brand.value = wheel_3_Brand.value.toUpperCase();
        wheel_4_Brand.value = wheel_4_Brand.value.toUpperCase();
        console.log(wheel_1_Brand.value);
        console.log(wheel_2_Brand.value);
        console.log(wheel_3_Brand.value);
        console.log(wheel_4_Brand.value);
        newCar.addWheel(new Wheel(parseFloat(wheel_1_Diameter.value), wheel_1_Brand.value));
        newCar.addWheel(new Wheel(parseFloat(wheel_2_Diameter.value), wheel_2_Brand.value));
        newCar.addWheel(new Wheel(parseFloat(wheel_3_Diameter.value), wheel_3_Brand.value));
        newCar.addWheel(new Wheel(parseFloat(wheel_4_Diameter.value), wheel_4_Brand.value));
        // ALSO WORKING THE SAME WAY WITH PUSH IN CASE WE DIDN'T HAVE setter addWheel
        // newCar.wheels.push(new Wheel(parseFloat(wheel_1_Diameter.value), wheel_1_Brand.value));
        // newCar.wheels.push(new Wheel(parseFloat(wheel_2_Diameter.value), wheel_2_Brand.value));
        // newCar.wheels.push(new Wheel(parseFloat(wheel_3_Diameter.value), wheel_3_Brand.value));
        // newCar.wheels.push(new Wheel(parseFloat(wheel_4_Diameter.value), wheel_4_Brand.value));
        // -------- PUSH NEW CAR ------- //
        arrCars.push(newCar);
        // HIDES COLLAPSIBLE WHEELS
        collapsibleWheels.classList.remove('show');
        // SHOWS CAR INFO COLLAPSIBLE
        collapsibleSuccess.classList.add('show');
        //  PRINTS CAR INFO
        carInfo.innerHTML = "That's it!<br><br>Plate: " + newCar.plate + "<br>Color: " + newCar.color + "<br>Brand: " + newCar.brand;
        // PRINTS WHEELS INFO
        // let outputDivs = [InfoWheel1, InfoWheel2, InfoWheel3, InfoWheel4] as HTMLDivElement[];
        var i;
        for (i = 0; i < newCar.wheels.length; i++) {
            outputDivs[i].innerHTML += "Wheel " + (i + 1) + ":<br><br>Brand: " + newCar.wheels[i].brand + "<br>Diameter: " + newCar.wheels[i].diameter + " <br>";
            // ${JSON.stringify(arrCars[i].wheels)}` *** ALSO ***
        }
    }
}
