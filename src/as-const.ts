export {};

let nickname = "Ham" as const;
nickname = "Ham";
// nickname= "makito"//エラー

//オブジェクトのconstアサーション
// すべてのプロパティをreadonlyにしたいときにas constを使う
let profile = {
  name: "makito",
  height: 180,
} as const;

// profile.name = "Ham"; //エラー
// profile.height = 190;　//エラー
