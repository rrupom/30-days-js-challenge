const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const languageSet = new Set(languages);

const counts = [];

for (let language of languageSet) {
  let count = languages.filter((lang) => lang === language);
  counts.push({
    lang: language,
    count: count.length,
  });
}

console.log(counts);
