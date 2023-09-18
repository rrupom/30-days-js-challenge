const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love`;

function mostFrequentWords(paragraph, size = 10) {
  let wordAndFreq = [];
  // split paragraph both on . and ""
  const words = paragraph.split(/[. ]+/);
  // creatinig set to store unique words
  const set = new Set(words);

  // iterate over set. make every word a pattern then seach for number of occurrences in the paragraph

  for (let i of set) {
    let pattern = new RegExp(i, "g");
    let matches = paragraph.match(pattern);
    wordAndFreq.push({
      word: i,
      count: matches.length,
    });
  }

  wordAndFreq.sort(function (a, b) {
    if (b.count > a.count) return 1;
    else return -1;
  });

  if (size <= wordAndFreq.length) console.log(wordAndFreq.slice(0, size));
  else console.log(wordAndFreq);
}

mostFrequentWords(paragraph, 10);
mostFrequentWords(paragraph, 20);
