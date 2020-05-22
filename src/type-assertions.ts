export {};

let name: any = "makito";

// let length = name.length as number;
let length = (name as string).length;
// let length = (<string>name).length; //非推奨：jsxで混同する
// length = "aa";//エラー
