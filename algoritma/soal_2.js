function getLongestSentence(sentence) {
  let words = sentence.split(' ');
  let longestWord = '';
  let lengthLongestWord = 0;
  let lengthWordArray = [];

  words.forEach(element => {
    const lengthWord = element.length;
    lengthWordArray.push(lengthWord);
    if (lengthWord > lengthLongestWord) {
      lengthLongestWord = lengthWord;
      longestWord = element;
    }
  });

  console.log(`${longestWord}: ${lengthLongestWord} character`);
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
getLongestSentence(sentence);
