export {};

abstract class Animal {
  // {}がいらない
  abstract cry(): string;
}

class Lion extends Animal {
  //Animalクラスを継承する時はcryメソッド（抽象メソッド）を作成しないとエラーになる
  cry() {
    return `roar`;
  }
}

class Tiger extends Animal {
  //Animalクラスを継承する時はcryメソッド（抽象メソッド）を作成しないとエラーになる
  cry() {
    return `grrrr`;
  }
}
