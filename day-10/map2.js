const countiesMap = new Map();

console.log(countiesMap.size);

countiesMap.set("Finland", "Helsinki");
countiesMap.set("Sweden", "Stockholm");
countiesMap.set("Norway", "Oslo");

console.log(countiesMap);
console.log(countiesMap.size);

console.log(countiesMap.keys());

console.log(countiesMap.get("Finland"));
console.log(countiesMap.has("Finland"));

for (let [country, capital] of countiesMap) {
  console.log(country, capital);
}
