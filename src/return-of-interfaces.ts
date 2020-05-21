export {};

class Mahotsukai {}

class Souryo {}

//TSでは複数のクラスは継承できない
//複数のインターフェースは継承できる
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

//複数のインターフェースは継承できる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.kougeki();
jiro.ionazun();
