var jsonString = '{"1": "A", "2": "B", "3": "D", "4": "C"}';
var parsedJson = JSON.parse(jsonString, function (key, value) {
  if (key != "") return "hello" + value;
  return value;
});

console.log(parsedJson);

console.log(JSON.parse(jsonString));
