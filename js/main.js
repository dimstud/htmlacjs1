function getRandomIntInclusive(min, max) {
  if (min > max) {
    alert('Error min > max');
    return;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
alert(getRandomIntInclusive(5, 15));

function lengthCheck(string, strMaxLeght) {
  string = string.length;
  if (string > strMaxLeght) {
    return alert('Ошибка: превышено количество символов');
  }
}
lengthCheck('test test', 5);
