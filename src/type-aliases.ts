export {};

// 通常の型指定
const fooString: string = 'Hello';

// エイリアスの型指定
type Mojiretsu = string; // type TypeName = types; エイリアスの型名は大文字から記述
const fooMojiretsu: Mojiretsu = 'Hello';

// 複雑なエイリアス
type Profile = {
  name: string;
  age: number;
};
const example: Profile = {
  name: 'hum',
  age: 24,
};

// 変数・定数の入力値から型推論
const example2 = {
  name: 'hum',
  age: 24,
};
type Profile2 = typeof example2; // 変数の型を見て型指定できる（typeofを使用する）
