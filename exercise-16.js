function totalDigitRekursif(angka) {
  // you can only write your code here!
  var strNum = String(angka);

  if (strNum.length === 0) {
    return 0;
  }

  return Number(strNum[0]) + totalDigitRekursif(strNum.slice(1, strNum.length));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5