export {};

class Person {
  //メンバ変数
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name:${this.name}, age:${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  protected(): string {
    return `name:${this.name}, age:${this.age}, nationality:${this.nationality}`;
  }
}

let taro = new Person("Makito", 26, "Japan");

console.log(taro.profile());
console.log(taro.name);
