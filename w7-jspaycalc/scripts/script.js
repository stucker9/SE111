// select the enter button element and add a click event listener
document.querySelector('#enter-button').addEventListener('click', calculatePay);

// function to handle the click event
function calculatePay(e) {
  // get input values
  const firstName = document.querySelector('#first-name').value.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());   // auto-format the name properly
  const lastName = document.querySelector('#last-name').value.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());     // auto-format the name properly
  const hoursWorked = Number(document.querySelector('#hours-worked').value);
  const hourlyRate = Number(document.querySelector('#hourly-rate').value);
  const taxRate = Number(document.querySelector('#tax-rate').value) || 0.2; // use OR operator for a fallback value

  // calculate pay
  const grossPay = hoursWorked * hourlyRate;
  const taxAmount = grossPay * taxRate;
  const netPay = grossPay - taxAmount;

  // build message string
  const fullName = `${firstName} ${lastName}`;
  const finalMessage = `Full Name: ${fullName} <br> Hours Worked: ${hoursWorked} <br> Hourly Rate: ${hourlyRate.toFixed(2)} <br> Gross Pay: ${grossPay.toFixed(2)} <br> Tax Amount: ${taxAmount.toFixed(2)} <br> Net Pay: ${netPay.toFixed(2)}`;

  // update info and check elements
  const info = document.querySelector('#info');
  info.innerHTML = finalMessage;
}

// select the submit button element and add a click event listener
document.querySelector('#submit').addEventListener('click', submitNow);

// function to handle the submit event
function submitNow() {
  // get input values
  const firstName = document.querySelector('#first-name').value.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase()); // auto-format the name properly
  const lastName = document.querySelector('#last-name').value.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());   // auto-format the name properly
  const hoursWorked = Number(document.querySelector('#hours-worked').value);
  const hourlyRate = Number(document.querySelector('#hourly-rate').value);
  const taxRate = Number(document.querySelector('#tax-rate').value) || 0.2; // use OR operator for a fallback value

  // calculate pay
  const grossPay = hoursWorked * hourlyRate;
  const taxAmount = grossPay * taxRate;
  const netPay = grossPay - taxAmount;

  // build message string
  const fullName = `${firstName} ${lastName}`;
  const finalMessage = `Full Name: ${fullName} \n Hours Worked: ${hoursWorked} \n Hourly Rate: ${hourlyRate.toFixed(2)} \n Gross Pay: ${grossPay.toFixed(2)} \n Tax Amount: ${taxAmount.toFixed(2)} \n Net Pay: ${netPay.toFixed(2)}`;

  // show message in alert box
  alert(finalMessage);
}
