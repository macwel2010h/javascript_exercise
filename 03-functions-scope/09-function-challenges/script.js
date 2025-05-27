const getCelcius = (f) => console.log(((f - 32) * 5) / 9);
getCelcius(56);

const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });
console.log(minMax([1, 2, 3, 4, 5]));

((a, b) =>
  console.log(
    `The area of a rectangle with a length of ${a} and a width of ${b} is ${
      a * b
    }.`
  ))(3, 5);
