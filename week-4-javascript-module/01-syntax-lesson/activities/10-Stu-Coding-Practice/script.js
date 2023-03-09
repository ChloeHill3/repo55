let playerSalary1 = 17000000;
let playerSalary2 = 16005000;
let playerSalary3 = 16059900;
let cap = 40000000;
let totalSalarys = playerSalary1 + playerSalary2 + playerSalary3;
let taxRate = 0.18;


let tax = 0;
if (totalSalarys > cap){
   tax = (totalSalarys-cap) * taxRate   
   console.log("Total Tax Owed:" + tax*taxRate)
}

else if (totalSalarys < cap){
 console.log("No Tax Owed")
}
