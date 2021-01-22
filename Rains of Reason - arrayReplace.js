function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  const result = inputArray.map((couurentValue) => {
    return couurentValue === elemToReplace ? substitutionElem : couurentValue;
  });

  return result;
}
