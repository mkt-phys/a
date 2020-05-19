export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined; //エラーでない
// let foo2: void = null; //エラーでない
// let bar: never = undefined; //エラー出る
let bar2: never = error("only me"); //never型飲み代入できる。使い道はない。
