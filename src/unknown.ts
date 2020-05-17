export {};

const kansu = (): number => 43;
let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10; //エラーでない
// let sumUnknown = numberUnknown + 10; //コンパイルエラーが出る

// console.log(typeof numberUnknown);
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
  console.log(123);
}
