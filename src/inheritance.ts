export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return `I can run`;
  }
}

//サブクラス
class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    //super()は親クラスのコンストラクタ―
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run(); //親クラスのrun methodを返す
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal("Makito").run());
console.log(new Lion("Mori", 80).run());
