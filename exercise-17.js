function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var numStr = String(angka);

  if (angka < 10) {
    return angka;
  }

  var multiply = 1;
  for (var i = 0; i < numStr.length; i++) {
    multiply *= Number(numStr[i])
  }

  return kaliTerusRekursif(multiply);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6