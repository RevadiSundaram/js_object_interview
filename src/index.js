const fruits = {
  peaches: 10,
  Oranges: 8,
  bananas: 6,
  apples: 5
};
Object.keys(fruits).forEach((item) => {
  fruits[item] = fruits[item] - 2;
});
console.log(fruits);
