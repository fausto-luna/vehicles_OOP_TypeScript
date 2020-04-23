
// shows and hides collapsible 'about'.
const footer = document.getElementById('footer') as HTMLBodyElement;
footer.addEventListener('mouseover', showAbout);
footer.addEventListener('mouseout', hideAbout);

function showAbout(){
const collapsibleAbout = document.getElementById('collapsibleAbout') as HTMLDivElement;
collapsibleAbout.classList.add('show');
}
function hideAbout(){
    const collapsibleAbout = document.getElementById('collapsibleAbout') as HTMLDivElement;
    collapsibleAbout.classList.remove('show');
}

// --------------------- LANDING PAGE --------------------- //

function start(){
    const collapsibleStart = document.getElementById('collapsibleStartID') as HTMLDivElement;
    const collapsibleCarID = document.getElementById('collapsibleCarID') as HTMLDivElement;
    collapsibleStart.classList.remove('show');
    collapsibleCarID.classList.add('show');
}
// --------------------- CREATE CAR --------------------- //
// ********** ********** //
// let arrCars:Car[] = new Array();
// ********** ********** //
let newCar: Car;

function CreateCar(){
    
    // plate input + error div
    const inputPlate = document.getElementById('inputPlate')! as HTMLInputElement;
    const plateError = document.getElementById('plateError')! as HTMLDivElement;
    // brand input + error div
    const inputBrand = document.getElementById('inputBrand')! as HTMLInputElement;
    const brandError = document.getElementById('brandError')! as HTMLDivElement;
    // color input + error div
    const inputColor = document.getElementById('inputColor')! as HTMLInputElement;
    const colorError = document.getElementById('colorError')! as HTMLDivElement;
    // inputs array
    let arrInputsCar:HTMLInputElement[] = [inputPlate, inputBrand, inputColor];
    // error divs array
    let arrDivsErrors:HTMLDivElement[] = [plateError, brandError, colorError];
    // collapsible divs. collapsibleCar is hiden then collapsibleWheels is shown if validation is succesful
    const collapsibleCar = document.getElementById('collapsibleCarID')! as HTMLDivElement;
    const collapsibleWheels = document.getElementById('collapsibleWheelsID')! as HTMLDivElement;

    // errors counter for final validation
    var errors = 0 as number

    // spanish plate after 2000 = 4 digits + 3 letters (0000hhh)
    const plateRegExp:RegExp = new RegExp(/^[0-9]{4}[a-zA-Z]{3}$/);

    // replaces white spaces for no space //
    inputPlate.value.replace(/ /g, "" );

    // removes .is-invalid
    arrInputsCar.forEach(RemoveInvalid);
    function RemoveInvalid(x:HTMLDivElement){
        x.classList.remove('is-invalid','error');
    }

    // .touppercase all values
    arrInputsCar.forEach(ToUpperCase);
    function ToUpperCase(x:HTMLInputElement){
        x.value = x.value.toUpperCase();
    }
    
    // plate, brand & color validation //
    var i = 0 as number;
    for (i = 0; i < arrInputsCar.length; i++){
        const isEmpty:boolean = arrInputsCar[i].value === "";
        const fewer3char:boolean = arrInputsCar[i].value.length < 3;
        if(isEmpty){
            arrInputsCar[i].classList.add('is-invalid','error');
            arrDivsErrors[i].textContent = `${arrInputsCar[i].placeholder} is required.`;
            errors ++;
        }
        if (arrInputsCar[i].placeholder == 'Plate' && !isEmpty && !plateRegExp.test(inputPlate.value)){
            arrInputsCar[i].classList.add('is-invalid','error');
            arrDivsErrors[i].textContent = 'Plate must be 4 digits plus 3 letters. Like this -> 1234ABC';
            errors ++;
        }
        if (!isEmpty && fewer3char){
            arrInputsCar[i].classList.add('is-invalid','error');
            arrDivsErrors[i].textContent = `${arrInputsCar[i].placeholder} must be at least 3 characters long.`;
            errors ++;
        }
    }
    // final validation
    if(errors > 0){
        return false;
    }else{
        // INSTANCE OBJECT CAR //
        newCar = new Car (inputPlate.value, inputColor.value, inputBrand.value);

        // hides collapsible car
        collapsibleCar.classList.remove('show');

        // shows collapsible Wheels
        collapsibleWheels.classList.add('show');
    }  
}

// ================ CREATE WHEELS ================ //

function createWheels(){
    
    // inputs wheels //
    const wheel_1_Brand = document.getElementById('wheel_1_Brand')! as HTMLInputElement;
    const wheel_1_Diameter = document.getElementById('wheel_1_Diameter')! as HTMLInputElement;
    const wheel_2_Brand = document.getElementById('wheel_2_Brand')! as HTMLInputElement;
    const wheel_2_Diameter = document.getElementById('wheel_2_Diameter')! as HTMLInputElement;
    const wheel_3_Brand = document.getElementById('wheel_3_Brand')! as HTMLInputElement;
    const wheel_3_Diameter = document.getElementById('wheel_3_Diameter')! as HTMLInputElement;
    const wheel_4_Brand = document.getElementById('wheel_4_Brand')! as HTMLInputElement;
    const wheel_4_Diameter = document.getElementById('wheel_4_Diameter')! as HTMLInputElement

    // array inputs wheels //
    let arrInputsWheels:HTMLInputElement[] = [
        wheel_1_Brand, 
        wheel_1_Diameter, 
        wheel_2_Brand,
        wheel_2_Diameter,
        wheel_3_Brand,
        wheel_3_Diameter,
        wheel_4_Brand,
        wheel_4_Diameter  
    ];
     //removes .is-invalid from previous failed validations
     arrInputsWheels.forEach(RemoveIsInvalid);
     function RemoveIsInvalid(x:HTMLDivElement){
         x.classList.remove('is-invalid', 'error');
     }

    // divs for .invalid-feedback //
    const wheel_1_BrandError = document.getElementById('wheel_1_BrandError') as HTMLDivElement;
    const wheel_1_DiameterError = document.getElementById('wheel_1_DiameterError') as HTMLDivElement;
    const wheel_2_BrandError = document.getElementById('wheel_2_BrandError') as HTMLDivElement;
    const wheel_2_DiameterError = document.getElementById('wheel_2_DiameterError') as HTMLDivElement;
    const wheel_3_BrandError = document.getElementById('wheel_3_BrandError') as HTMLDivElement;
    const wheel_3_DiameterError = document.getElementById('wheel_3_DiameterError') as HTMLDivElement;
    const wheel_4_BrandError = document.getElementById('wheel_4_BrandError') as HTMLDivElement;
    const wheel_4_DiameterError = document.getElementById('wheel_4_DiameterError') as HTMLDivElement;

     // array divs for invalid feedback message //
    let arrDivsErrors:HTMLDivElement[] = [
        wheel_1_BrandError,
        wheel_1_DiameterError,
        wheel_2_BrandError,
        wheel_2_DiameterError,
        wheel_3_BrandError,
        wheel_3_DiameterError,
        wheel_4_BrandError,
        wheel_4_DiameterError
    ];
    
    // collapsible divs
    const collapsibleWheels = document.getElementById('collapsibleWheelsID')! as HTMLDivElement;
    const collapsibleSuccess = document.getElementById('row3')! as HTMLDivElement;

    // divs for printing car info after successful  registration
    const carInfo = document.getElementById('carInfo') as HTMLHeadingElement;
    const InfoWheel1 = document.getElementById('InfoWheel1') as HTMLDivElement;
    const InfoWheel2 = document.getElementById('InfoWheel2') as HTMLDivElement;
    const InfoWheel3 = document.getElementById('InfoWheel3') as HTMLDivElement;
    const InfoWheel4 = document.getElementById('InfoWheel4') as HTMLDivElement;

    // divs array where full car info will be printed
    const outputDivs = [InfoWheel1, InfoWheel2, InfoWheel3, InfoWheel4] as HTMLDivElement[];

    // errors counter for final validation
    var errors = 0 as number;

   // ----------- ALL INPUTS (WHEELS) VALIDATION ----------- //
   var i:number;
   for (i = 0; i < arrInputsWheels.length; i++){
       const isEmpty:boolean = arrInputsWheels[i].value == '';
       const fewer3char:boolean = arrInputsWheels[i].value.length < 3;
       const NotANumber:boolean = isNaN(parseFloat(arrInputsWheels[i].value));
       if (NotANumber && isEmpty || NotANumber && fewer3char){
            arrInputsWheels[i].classList.add('is-invalid','error');
            if (isEmpty){
                arrDivsErrors[i].textContent = `${arrInputsWheels[i].placeholder} is required.`;
                errors ++;
            }
            if(!isEmpty && fewer3char){
                arrDivsErrors[i].textContent = `${arrInputsWheels[i].placeholder} must be at least 3 characters long.`;
                errors ++;
            }
        }else if (arrInputsWheels[i].valueAsNumber < 0.4 || arrInputsWheels[i].valueAsNumber > 2){
            arrInputsWheels[i].classList.add('is-invalid','error');
            arrDivsErrors[i].textContent = `${arrInputsWheels[i].placeholder} must be: min 0.4 - max 2`;
            errors ++;
        }
    }
    if (errors > 0){
        return false;
    }else{
        // .toUpperCase all values
        for (i = 0; i < arrInputsWheels.length; i++){
            arrInputsWheels[i].value = arrInputsWheels[i].value.toUpperCase();
            console.log(arrInputsWheels[i].value);
        }
        // ADD WHEELS TO CAR
        newCar.addWheel(new Wheel(parseFloat(wheel_1_Diameter.value), wheel_1_Brand.value));
        newCar.addWheel(new Wheel(parseFloat(wheel_2_Diameter.value), wheel_2_Brand.value));
        newCar.addWheel(new Wheel(parseFloat(wheel_3_Diameter.value), wheel_3_Brand.value));
        newCar.addWheel(new Wheel(parseFloat(wheel_4_Diameter.value), wheel_4_Brand.value));
        // ALSO WORKING THE SAME WAY WITH PUSH IN CASE WE DIDN'T HAVE setter addWheel
        // newCar.wheels.push(new Wheel(parseFloat(wheel_1_Diameter.value), wheel_1_Brand.value));
        // newCar.wheels.push(new Wheel(parseFloat(wheel_2_Diameter.value), wheel_2_Brand.value));
        // newCar.wheels.push(new Wheel(parseFloat(wheel_3_Diameter.value), wheel_3_Brand.value));
        // newCar.wheels.push(new Wheel(parseFloat(wheel_4_Diameter.value), wheel_4_Brand.value));

        // hodes collapsible wheels
        collapsibleWheels.classList.remove('show');

        // shows car info collapsible
        collapsibleSuccess.classList.add('show');

        // prints plate, color and brand
        carInfo.innerHTML = `That's it!<br><br>Plate: ${newCar.plate}<br>Color: ${newCar.color}<br>Brand: ${newCar.brand}`;
        
        // prints wheels info
        // let outputDivs = [InfoWheel1, InfoWheel2, InfoWheel3, InfoWheel4] as HTMLDivElement[];
        for ( i = 0 ; i < newCar.wheels.length; i++){
            outputDivs[i].innerHTML += `Wheel ${i+1}:<br><br>Brand: ${newCar.wheels[i].brand}<br>Diameter: ${newCar.wheels[i].diameter} <br>`;
            // ${JSON.stringify(arrCars[i].wheels)}` *** ALSO ***
        }
    }        
}

