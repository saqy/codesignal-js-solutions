function addBorder(picture) {
  let result = [];

  const numberOfAsterics = Array.from("*" + picture[0] + "*", (value) => {
    return "*";
  }).join("");
  for (let i = 0; i < picture.length; i++) {
    let str = "";
    str += "*" + picture[i] + "*";
    result.push(str);
  }

  return [numberOfAsterics, ...result, numberOfAsterics];
}
