export {};

let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / height ** 2;
};

console.log(bmi(1.8, 65));
