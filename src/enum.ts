export {};

// Enum(列挙型)とは、複数の定数をひとつにまとめておくことができる型のこと

// 数値：月名を格納
enum Months {
  January = 1, // 番号はオーバーライド（上書き）できる, 代入した数値からの連番になってくれる
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}
// 列挙した月名には連番が振られている
console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// 文字列：カラーコードを格納
enum COLORS {
  RED = '#f00',
  WHITE = '#fff',
  GREEN = '#080',
  BLUE = '#00f',
  BLACK = '#000',
}
let green = COLORS.GREEN;
console.log({ green });

// enumは途中で追加できる
enum COLORS {
  YELLOW = '#ff0',
  // GRAY, // エラー : 初期化が必要
}
let yellow = COLORS.YELLOW; // 追加したenum
console.log({ yellow });
let white = COLORS.WHITE; // 最初に宣言したenum
console.log({ white });
