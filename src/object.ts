export {};

let profile: object = { name: "Ham" };
profile = { birthYear: 1976 }; //上書きできる

let profile2: {
  name: string;
} = { name: "makito" };
// profile2 = { birthYear: 1976 }; //上書きできない
profile2 = { name: "mori" };
