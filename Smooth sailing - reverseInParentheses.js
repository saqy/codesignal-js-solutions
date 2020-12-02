function reverseInParentheses(inputString) {
  let toArray = inputString.split("");
  let hasBrackets = true;

  while (hasBrackets) {
    let start = toArray.lastIndexOf("(");
    let end = toArray.indexOf(")", start);
    if (start >= 0 && end >= 0) {
      let toReverse = toArray.slice(start + 1, end);

      let reversePart = toReverse.reverse();
      toArray.splice(start, end - start + 1, ...reversePart);
    } else {
      hasBrackets = false;
    }
  }

  return toArray.join("");
}
