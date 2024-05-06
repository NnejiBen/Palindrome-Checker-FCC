// grab text input field
const textInput = document.getElementById("text-input");

// grab check button
const checkBtn = document.getElementById("check-btn");

//grab result
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  // get current value of the text input field
  const textInputValue = textInput.value;

  //filter entered value of the text input field
  const cleanInputString = (textInputValue) => {
  const regex = /[.,\/\\+\-_:()\s]/g;
  return textInputValue.replace(regex, "").toLowerCase();
  }

  // reverse the current value of the text input field
  const reversedInputValue = cleanInputString(textInputValue).split("").reverse("").join("").toLowerCase();
  
  // if text input field is empty: "Please input a value"
  if (textInputValue === "") {
    alert("Please input a value");
  }

  //if text input is same as reversed input
  if (cleanInputString(textInputValue) === reversedInputValue) {
    result.textContent = textInputValue + " is a palindrome";
    
  //if text input is not the same as reversed input
  } else {
    result.textContent = textInputValue + " is not a palindrome";
  }

  // Clean up the text input
  textInput.value = "";
})