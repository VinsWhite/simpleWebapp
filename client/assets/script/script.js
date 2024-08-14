document.addEventListener('DOMContentLoaded', () => {
    // after the page loads, the values of the input fields will be empty
    document.querySelector('#num1').value = '';
    document.querySelector('#num2').value = '';
});

document.querySelector('#calculateButton').addEventListener('click', () => {
    const num1 = parseFloat(document.querySelector('#num1').value);
    const num2 = parseFloat(document.querySelector('#num2').value);
  
    if (isNaN(num1) || isNaN(num2)) { // the process will be stopped if the provided values are not numeric
      alert('Please enter valid numbers');
      return;
    }
  
    fetch('http://localhost:3000/calculate', { // fetch api
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // body request --> json
      },
      body: JSON.stringify({ num1, num2 })
    })
    .then(response => response.json())
    .then(data => {
      document.querySelector('.result').textContent = `Result: ${data.result}`; // the result will be placed in .result
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
  