export {};

class Me {
  //静的に初期化
  static isProgrammer: boolean = true;
  static firstName: string = "Makito";
  static lastName: string = "Mori";

  static work() {
    return `Hey, guys! This is ${this.lastName} Are you interested in TypeScript?`;
    // return `Hey, guys! This is ${Me.lastName} Are you interested in TypeScript?`; //＜class名.メンバ変数＞でも書けるがclass名が変わったときにこのメソッドも変える必要があるからこのやり方はあまりやらない。
  }
}

let me = new Me();
// console.log({ me });

// console.log(me.isProgrammer);
console.log(Me.work());
