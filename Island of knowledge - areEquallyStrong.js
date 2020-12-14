function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourMax = Math.max(yourLeft, yourRight);
  const friendsMax = Math.max(friendsLeft, friendsRight);
  const yourMin = Math.min(yourLeft, yourRight);
  const friendsMin = Math.min(friendsLeft, friendsRight);

  if (yourMax === friendsMax && yourMin === friendsMin) {
    return true;
  }
  return false;
}
