export {};

class Person {
  //アクセス修飾子を付けることで初期化までできる。
  constructor(public name: string, protected age: number) {}
}

const me = new Person("Makito", 26);
console.log(me);
