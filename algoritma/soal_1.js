function reverseStringExceptLastChar(string) {
  let index = string.length;

  for (let j = string.length - 1; j >= 0; j--) {
    const char = string[j];
    if (char >= "0" && char <= "9") {
      index = j;
    } else {
      break;
    }
  }

  const alphabet = string.slice(0, index);
  const number = string.slice(index);
  return alphabet.split("").reverse().join("") + number
}

const string = "NEGIE"
const reversedString = reverseStringExceptLastChar(string);
console.log(reversedString);
