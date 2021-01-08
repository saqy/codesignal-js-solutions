function centuryFromYear(year) {
  if (year <= 0) {
    return 0;
  } else {
    return Math.ceil(year / 100);
  }
}
