const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?.`;

function dataCleaning(sentence) {
  const pattern = /[%$@#&;,!?]+/g;

  let cleanSentence = sentence.replace(pattern, "");

  return cleanSentence;
}

function cleanText(sentence) {
  const cleanSentence = dataCleaning(sentence);

  // for storing word and count object
  let wordAndCount = [];

  // splitting word base on period or space
  const words = cleanSentence.split(/[. ]+/);

  // creating map for unique word count
  const set = new Set(words);

  // iterate over the set to count how many occurence of the word

  for (let word of set) {
    let pattern = new RegExp(word, "g");
    let matches = cleanSentence.match(pattern);

    wordAndCount.push({
      word: word,
      count: matches.length,
    });
  }

  // sort the wordAndCount array
  wordAndCount.sort((a, b) => {
    if (b.count > a.count) return 1;
    else return -1;
  });

  return wordAndCount;
}

console.log(cleanText(sentence));
