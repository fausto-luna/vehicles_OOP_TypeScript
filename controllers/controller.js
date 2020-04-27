// --------------------- LANDING PAGE --------------------- //
function start() {
    var collapsibleStart = document.getElementById('collapsibleStartID');
    var collapsibleCarID = document.getElementById('collapsibleCarID');
    collapsibleStart.classList.remove('show');
    collapsibleCarID.classList.add('show');
}
// *************** *************** //
// let arrCars:Car[] = new Array();
// *************** *************** //
var newCar;
// --------------------- CREATE CAR --------------------- //
function CreateCar() {
    // errors counter for final validation
    var errors = 0;
    // spanish plate after 2000 = 4 digits + 3 letters (0000HHH)
    var plateRegExp = new RegExp(/^[0-9]{4}[a-zA-Z]{3}$/);
    var inputPlate = document.getElementById('inputCar1');
    inputPlate.value.replace(/ /g, "");
    // input validation //
    // Plate id=('inputCar1') // Color id=('inputCar2') // Brand id=('inputCar3') //
    var i;
    for (i = 1; i <= 3; i++) {
        var inputCar = document.getElementById('inputCar' + i);
        var errorCar = document.getElementById('errorCar' + i);
        // removes .is-ivalid and .error from previous failed validation
        inputCar.classList.remove('is-invalid', 'error');
        var isEmpty = inputCar.value === "";
        var fewer3char = inputCar.value.length < 3;
        if (isEmpty) {
            inputCar.classList.add('is-invalid', 'error');
            errorCar.textContent = inputCar.name + " is required.";
            errors++;
        }
        if (inputCar.name == 'Plate' && !isEmpty && !plateRegExp.test(inputCar.value)) {
            inputCar.classList.add('is-invalid', 'error');
            errorCar.textContent = 'Plate must be 4 digits plus 3 letters. Like this -> 1234ABC';
            errors++;
        }
        if (!isEmpty && fewer3char && inputCar.name != 'Plate') {
            inputCar.classList.add('is-invalid', 'error');
            errorCar.textContent = inputCar.name + " must be at least 3 characters long.";
            errors++;
        }
    }
    // final validation
    if (errors > 0) {
        return false;
    }
    else {
        // INSTANCE OBJECT CAR //
        // const inputPlate is declared at line 57 //
        var inputColor = document.getElementById('inputCar2');
        var inputBrand = document.getElementById('inputCar3');
        newCar = new Car(inputPlate.value.toUpperCase(), inputColor.value.toUpperCase(), inputBrand.value.toUpperCase());
        // hides current page and shows next step
        var collapsibleCar = document.getElementById('collapsibleCarID');
        collapsibleCar.classList.remove('show');
        var collapsibleWheels = document.getElementById('collapsibleWheelsID');
        collapsibleWheels.classList.add('show');
    }
}
// ================ CREATE WHEELS ================ //
function createWheels() {
    var errors = 0;
    // ----------- ALL INPUTS (WHEELS) VALIDATION ----------- //
    var i;
    for (i = 1; i <= 4; i++) {
        var brandWheel = document.getElementById("brandWheel" + i);
        var diameterWheel = document.getElementById("diameterWheel" + i);
        var errorBrand = document.getElementById('errorBrandWheel' + i);
        var errorDiameter = document.getElementById('errorDiameterWheel' + i);
        brandWheel.classList.remove('is-invalid', 'error');
        diameterWheel.classList.remove('is-invalid', 'error');
        var BrandIsEmpty = brandWheel.value == '';
        var DiameterIsEmpty = diameterWheel.value == '';
        var fewer3char = brandWheel.value.length < 3;
        // brand validation
        if (BrandIsEmpty || fewer3char) {
            brandWheel.classList.add('is-invalid', 'error');
            if (BrandIsEmpty) {
                errorBrand.textContent = brandWheel.name + " is required.";
                errors++;
            }
            if (!BrandIsEmpty && fewer3char) {
                errorBrand.textContent = brandWheel.name + " must be at least 3 characters long.";
                errors++;
            }
        }
        // diameter validation
        if (DiameterIsEmpty || diameterWheel.valueAsNumber < 0.4 || diameterWheel.valueAsNumber > 2) {
            diameterWheel.classList.add('is-invalid', 'error');
            if (DiameterIsEmpty) {
                errorDiameter.textContent = diameterWheel.name + " is required.";
                errors++;
            }
            if (diameterWheel.valueAsNumber < 0.4 || diameterWheel.valueAsNumber > 2) {
                errorDiameter.textContent = diameterWheel.name + " must be: min 0.4 - max 2";
                errors++;
            }
        }
    }
    if (errors > 0) {
        return false;
    }
    else {
        // ADD WHEELS TO CAR
        for (var i_1 = 1; i_1 <= 4; i_1++) {
            var brandWheel = document.getElementById("brandWheel" + i_1);
            var diameterWheel = document.getElementById("diameterWheel" + i_1);
            newCar.addWheel(new Wheel(Number(diameterWheel.value), brandWheel.value.toUpperCase()));
            // also working the same way with 'push' in case we didn't have setter(function) '.addWheel';
            // newCar.wheels.push(new Wheel(parseFloat(diameterWheel.value), brandWheel.value));
            // preguntar cuál es mejor
        }
        var collapsibleWheels = document.getElementById('collapsibleWheelsID');
        collapsibleWheels.classList.remove('show');
        var collapsibleSuccess = document.getElementById('row4');
        collapsibleSuccess.classList.add('show');
        var carInfo = document.getElementById('carInfo');
        carInfo.innerHTML = "That's it!<br><br>Plate: " + newCar.plate + "<br>Color: " + newCar.color + "<br>Brand: " + newCar.brand;
        for (i = 1; i <= 4; i++) {
            var infoWheel = document.getElementById('InfoWheel' + i);
            infoWheel.innerHTML += "Wheel " + i + ":<br><br>Brand: " + newCar.wheels[i - 1].brand + "<br>Diameter: " + newCar.wheels[i - 1].diameter + " <br>";
            // ${JSON.stringify(arrCars[i].wheels)}` *** ALSO ***
        }
    }
}
