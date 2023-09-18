const pattern = /[a].{2}/g;

const txt = "Apple and banana are fruits";

const matches = txt.match(pattern);

console.log(matches);

const text = `I am not sure if there is a convention how to write the word e-mail. Some people write it email others may write it as Email or E-mail.`;

const pattern2 = /[Ee]-?mail/g;

console.log(text.match(pattern2));
