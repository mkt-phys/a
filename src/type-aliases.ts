export {};

type Mojiretsu = string; //先頭は大文字

const fooString: string = "hello";
const fooMojiretsu: Mojiretsu = "hello";

const example1 = {
  name: "Makito",
  age: 26,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "Makito",
  age: 26,
};

type Profile2 = typeof example1;
