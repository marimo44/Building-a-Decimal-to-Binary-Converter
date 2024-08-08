const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [   //Step 83
  {
    inputVal: 5,              //inputVal will represent the value of the input each time your recursive function runs
    marginTop: 300,           //marginTop will be the top margin for DOM elements you'll add to the page
    addElDelay: 1000,         //addElDelay will be the delay between adding DOM elements to the page
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

//Step 15
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

//Step 74
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

//Step 2 - check the value in the number input element whenever the user clicks the Convert button
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  //if (!numberInput.value || parseInt(numberInput.value)) {  Step 11 - checks if input is not falsy or is an integer
  if (!numberInput.value || isNaN(inputInt)) {
    alert("Please provide a decimal number");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

//Step 4
convertBtn.addEventListener("click", checkUserInput);
//Step 5 -  keydown event fires every time a user presses a key on their keyboard
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {    //checks if ENTER key is pressed
    checkUserInput();
  }
});
