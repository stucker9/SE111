// gather user input
let hourlyPay = Number(prompt("What is your hourly pay rate?"));
let hoursWorked = Number(prompt("How many hours did you work in a two-week period?"));

// calculate gross pay, tax, and net pay
let grossPay = hourlyPay * hoursWorked;
let tax = grossPay * 0.2;
let netPay = grossPay - tax;

// format and display results using the toFixed method
alert("Gross Pay: $" + grossPay.toFixed(2) + "\nUncle Sam's Share: $" + tax.toFixed(2) + "\nNet Pay: $" + netPay.toFixed(2));
console.log("Gross Pay: $" + grossPay.toFixed(2));
console.log("Uncle Sam's Share: $" + tax.toFixed(2));
console.log("Net Pay: $" + netPay.toFixed(2));