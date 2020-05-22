export {};

class Person {
  name: string;
  age: number;

  //コンストラクタ―の戻り値は書かない（returnしないから）
  //constructor():voidみたいなのはいらない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name:${this.name}, age:${this.age}`;
  }
}

let taro = new Person("Makito", 26);
console.log({ taro });
console.log(taro.profile());
