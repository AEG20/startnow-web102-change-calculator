
function calculateChange() {

var cashDue = document.getElementById("amount-due").value;
var cashPaid = document.getElementById("amount-received").value; 
var change = (cashPaid - cashDue);

var remaining = change * 100;

var twenties = Math.floor(remaining/2000);
remaining = remainining%2000;
document.getElementById("twenties-output").innerHTML =  twenties;

var tens = Math.floor(remaining/1000);
remaining = remainining%1000;
document.getElementById("tens-output").innerHTML =  tens;

var fives = Math.floor(remaining/500);
remaining = remainining%500;
document.getElementById("fives-output").innerHTML =  fives;

var dollar = Math.floor(remaining/100);
remaining = remaining%100;
document.getElementById("dollars-output").innerHTML =  dollar;

var quarter = Math.floor(remaining/25);
remaining = remaining%25;
document.getElementById("quarters-output").innerHTML = quarter;

var dimes = Math.floor(remaining/10);
remaining = remaining%10;
document.getElementById("dimes-output").innerHTML = dimes;

var nickels = Math.floor(remaining/5);
remaining = remaining%5;
document.getElementById("nickels-output").innerHTML =  nickels;

var penny = Math.round(remaining/1);
remaining = remaining%1
document.getElementById("pennies-output").innerHTML = penny;

}

document.getElementById("calculate-change").addEventListener('click', calculateChange); 



