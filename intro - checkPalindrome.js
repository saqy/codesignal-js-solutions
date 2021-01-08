function checkPalindrome(inputString) {
  if (inputString.split("").reverse().join("") === inputString) {
    return true;
  } else {
    return false;
  }
}
