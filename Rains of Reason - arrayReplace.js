function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  const result = inputArray.map((couurentValue, index) => {
    return couurentValue === elemToReplace ? substitutionElem : couurentValue;
  });

  return result;
}
