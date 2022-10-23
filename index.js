let calcEl = document.getElementById('calc-el');
let meterEl = document.getElementById('meter-el');
let literEl = document.getElementById('liter-el');
let kiloEl = document.getElementById('kilo-el');

function calculate(){
    let digit = Number(calcEl.value);
        // meter into feets
    let meter = digit * 3.28084;
    // // feets into meter
    let feets =  digit * 0.3048;
    // // liters into gallons
    let liter =  digit * 0.3048;
    // // gallons into liters
    let gallon =  digit * 3.78541;
    // //kilos to pounds
    let kilo =  digit * 3.78541;
    // // pounds to kilos
    let pound =  digit * 0.453592;

    meterEl.textContent = `${digit} meters = ${meter.toFixed(4)} feet | ${digit} feet = ${feets.toFixed(4)} meters`;
    literEl.textContent = `${digit} liters = ${liter.toFixed(4)} gallons | ${digit} gallons = ${gallon.toFixed(4)} liters`;
    kiloEl.textContent = `${digit} kilos = ${kilo.toFixed(4)} pounds | ${digit} pounds = ${pound.toFixed(4)} kilos`;

}