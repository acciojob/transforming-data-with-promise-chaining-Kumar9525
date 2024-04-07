//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
  const userInput = parseInt(document.getElementById("ip").value);

  // Step 1: Create a promise that resolves after 2 seconds with the user input
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isNaN(userInput)) {
        resolve(userInput);
      } else {
        reject("Invalid input. Please enter a number.");
      }
    }, 2000);
  });

  // Step 2: Chain a promise to print the result of step 1
  promise1
    .then((result) => {
      document.getElementById("output").innerText = `Result: ${result}`;
      return result;
    })
    // Step 3: Chain a promise to multiply the result by 2
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    // Step 4: Chain a promise to subtract 3 from the result
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    // Step 5: Chain a promise to divide the result by 2
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    // Step 6: Chain a promise to add 10 to the result
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + 10);
        }, 1000);
      });
    })
    // Step 7: Update the final result in the output div
    .then((finalResult) => {
      document.getElementById("output").innerText = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      document.getElementById("output").innerText = `Error: ${error}`;
    });
});
