function changeVocals (str) {
  //code di sini
  var changedVowel = "";

  var vowelObject = {
    a: "b",
    i: "j",
    u: "v",
    e: "f",
    o: "p",
    A: "B",
    I: "J",
    U: "V",
    E: "F",
    O: "P"
  };

  for (var i = 0; i < str.length; i++) {
    if (vowelObject[str[i]]) {
      changedVowel += vowelObject[str[i]];
    }
    else {
      changedVowel += str[i];
    }
  }

  return changedVowel;
}

function reverseWord (str) {
  //code di sini
  var reversed = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

function setLowerUpperCase (str) {
  //code di sini
  var changeCase = "";

  for (var i = 0; i < str.length; i++) {
    if(str[i] === str[i].toLowerCase()) {
      changeCase += str[i].toUpperCase();
    }
    else if (str[i] === str[i].toUpperCase()) {
      changeCase += str[i].toLowerCase();
    }
  }

  return changeCase;
}

function removeSpaces (str) {
  //code di sini
  var removedSpace = "";

  for (var i = 0; i < str.length; i ++) {
    if (str[i] !== " ") {
      removedSpace += str[i];
    }
  }

  return removedSpace;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  var changeVowels = changeVocals(name);
  var wordReversal = reverseWord(changeVowels);
  var switchCase = setLowerUpperCase(wordReversal);
  var spaceRemoval = removeSpaces(switchCase);

  return spaceRemoval;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'