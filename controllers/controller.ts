
// --------------------- LANDING PAGE --------------------- //
function start(){
    const collapsibleStart = document.getElementById('collapsibleStartID') as HTMLDivElement;
    const collapsibleCarID = document.getElementById('collapsibleCarID') as HTMLDivElement;
    collapsibleStart.classList.remove('show');
    collapsibleCarID.classList.add('show');
}

// *************** *************** //
// let arrCars:Car[] = new Array();
// *************** *************** //
let newCar: Car;

// --------------------- CREATE CAR --------------------- //
function CreateCar(){

    // errors counter for final validation
    var errors = 0 as number
    // spanish plate after 2000 = 4 digits + 3 letters (0000HHH)
    const plateRegExp:RegExp = new RegExp(/^[0-9]{4}[a-zA-Z]{3}$/);
    const inputPlate = document.getElementById('inputCar1')! as HTMLInputElement;
    inputPlate.value.replace(/ /g, "" );

    // input validation //
    // Plate id=('inputCar1') // Color id=('inputCar2') // Brand id=('inputCar3') //
    var i:number;
    for (i = 1; i <= 3; i++){
        let inputCar = <HTMLInputElement>document.getElementById('inputCar' + i);
        let errorCar = <HTMLDivElement>document.getElementById('errorCar' + i);
        // removes .is-ivalid and .error from previous failed validation
        inputCar.classList.remove('is-invalid', 'error');
        const isEmpty:boolean = inputCar.value === "";
        const fewer3char:boolean = inputCar.value.length < 3;
        if(isEmpty){
            inputCar.classList.add('is-invalid','error');
            errorCar.textContent = `${inputCar.name} is required.`;
            errors ++;
        }
        if (inputCar.name == 'Plate' && !isEmpty && !plateRegExp.test(inputCar.value)){
            inputCar.classList.add('is-invalid','error');
            errorCar.textContent = 'Plate must be 4 digits plus 3 letters. Like this -> 1234ABC';
            errors ++;
        }
        if (!isEmpty && fewer3char && inputCar.name != 'Plate'){
            inputCar.classList.add('is-invalid','error');
            errorCar.textContent = `${inputCar.name} must be at least 3 characters long.`;
            errors ++;
        }
    }
    // final validation
    if(errors > 0){
        return false;
    }else{
        // INSTANCE OBJECT CAR //
        // const inputPlate is declared at line 57 //
        const inputColor = document.getElementById('inputCar2')! as HTMLInputElement;
        const inputBrand = document.getElementById('inputCar3')! as HTMLInputElement;
        newCar = new Car (inputPlate.value.toUpperCase(), inputColor.value.toUpperCase(), inputBrand.value.toUpperCase());
        // hides current page and shows next step
        const collapsibleCar = document.getElementById('collapsibleCarID')! as HTMLDivElement;
        collapsibleCar.classList.remove('show');
        const collapsibleWheels = document.getElementById('collapsibleWheelsID')! as HTMLDivElement;
        collapsibleWheels.classList.add('show');
    }  
}

// ================ CREATE WHEELS ================ //

function createWheels(){
    var errors = 0 as number;
   // ----------- ALL INPUTS (WHEELS) VALIDATION ----------- //
   var i:number;
   for (i = 1; i <= 4; i++){
       let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
       let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
       let errorBrand = <HTMLInputElement>document.getElementById('errorBrandWheel' + i);
       let errorDiameter = <HTMLInputElement>document.getElementById('errorDiameterWheel' + i);
        brandWheel.classList.remove('is-invalid', 'error');
        diameterWheel.classList.remove('is-invalid', 'error');
       const BrandIsEmpty:boolean = brandWheel.value == '';
       const DiameterIsEmpty:boolean = diameterWheel.value == '';
       const fewer3char:boolean = brandWheel.value.length < 3;
       // brand validation
       if (BrandIsEmpty || fewer3char){
        brandWheel.classList.add('is-invalid','error');
            if (BrandIsEmpty){
                errorBrand.textContent = `${brandWheel.name} is required.`;
                errors ++;
            }
            if(!BrandIsEmpty && fewer3char){
                errorBrand.textContent = `${brandWheel.name} must be at least 3 characters long.`;
                errors ++;
            }
        }
        // diameter validation
        if (DiameterIsEmpty || diameterWheel.valueAsNumber < 0.4 || diameterWheel.valueAsNumber > 2){
            diameterWheel.classList.add('is-invalid','error');
            if (DiameterIsEmpty){
                errorDiameter.textContent = `${diameterWheel.name} is required.`;
                errors ++;
            }
            if (diameterWheel.valueAsNumber < 0.4 || diameterWheel.valueAsNumber > 2){
                errorDiameter.textContent = `${diameterWheel.name} must be: min 0.4 - max 2`;
                errors ++;
            }
        }
       
    }
    if (errors > 0){
        return false;
    }else{
         // ADD WHEELS TO CAR
        for (let i = 1; i <= 4; i++) {
            let brandWheel = <HTMLInputElement>document.getElementById("brandWheel" + i);
            let diameterWheel = <HTMLInputElement>document.getElementById("diameterWheel" + i);
            newCar.addWheel(new Wheel(Number(diameterWheel.value), brandWheel.value.toUpperCase()));
            // also working the same way with 'push' in case we didn't have setter(function) '.addWheel';
            // newCar.wheels.push(new Wheel(parseFloat(diameterWheel.value), brandWheel.value));
            // preguntar cuál es mejor
        }
        const collapsibleWheels = document.getElementById('collapsibleWheelsID')! as HTMLDivElement;
        collapsibleWheels.classList.remove('show');
        const collapsibleSuccess = document.getElementById('row4')! as HTMLDivElement;
        collapsibleSuccess.classList.add('show');
        const carInfo = document.getElementById('carInfo') as HTMLHeadingElement;
        carInfo.innerHTML = `That's it!<br><br>Plate: ${newCar.plate}<br>Color: ${newCar.color}<br>Brand: ${newCar.brand}`;
        for ( i = 1 ; i <= 4; i++){
            let infoWheel = <HTMLDivElement>document.getElementById('InfoWheel' + i);
            infoWheel.innerHTML += `Wheel ${i}:<br><br>Brand: ${newCar.wheels[i-1].brand}<br>Diameter: ${newCar.wheels[i-1].diameter} <br>`;
            // ${JSON.stringify(arrCars[i].wheels)}` *** ALSO ***
        }
    }        
}

