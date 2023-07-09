let cel = document.getElementById("celcius");
let fer = document.getElementById("farenheit");
let kel = document.getElementById("kelvin");

function c_convert(Temp) {
    Temp = parseFloat(Temp);
    fer.value = (Temp * 9/5) + 32;
    kel.value = Temp + 273.15;
}

function f_convert(Temp) {
    Temp = parseFloat(Temp);
    cel.value = (Temp-32)*5/9;
    kel.value = ((Temp-32)*5/9) + 273.15;
}

function k_convert(Temp) {
    Temp = parseFloat(Temp);
    fer.value = ((Temp - 273.15)*9/5) + 32;
    cel.value = Temp - 273.15;
}