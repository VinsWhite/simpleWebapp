const express = require('express');
const cors = require('cors'); // to prevent cors origin problems
const app = express();
const port = 3000;

app.use(express.json()); // middleware for json request
app.use(cors()); // middleware for cors request

// this function finds the first prime number greater than n
function findNextPrime(n) {
  let num = n + 1;

  // Loop to find the next prime number
  while (true) {
    let isPrime = true; // assume num is prime initially
    
    for (let i = 2; i <= Math.sqrt(num); i++) { // check if num is divisible by any number from 2 up to the square root of num
      // if num is divisible by i, then num is not a prime number
      if (num % i === 0) {
        isPrime = false; // num is not a prime number
        break;
      }
    }

    // if num is still considered prime, return it
    if (isPrime) return num;

    num++; // increment num and check the next number
  }
}

// Endpoint to calculate
app.post('/calculate', (req, res) => {
  const { num1, num2 } = req.body; // use num1 and num2 from the request body
  if (typeof num1 !== 'number' || typeof num2 !== 'number') { // revalidate if the numbers are "real numbers"
    return res.status(400).json({ error: 'Invalid input' });
  }
  const maxNum = Math.max(num1, num2); // find the max number between num1 and num2
  const nextPrime = findNextPrime(maxNum); // use the findNextPrime function that I created
  const result = num1 + num2 + nextPrime; // and finally the result
  res.json({ result }); // return in a json file
});

// server
app.listen(port, () => {  
  console.log(`Server running at http://localhost:${port}`);
});
