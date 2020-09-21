export {};

// constアサーション（型アサーションとは異なる）
// データの書き換えを行わない = const

// 通常の変数定義
let name = 'hum';
name = 'voodoo';

// constアサーションでの変数定義
let nickname = 'hum' as const; // nicknameにカーソルを当てると、'hum'型と表示される（定数となっている）
nickname = 'voodoo'; // エラー : 'hum'型になっているので、代入できない

// オブジェクトにも使える
let profile = {
  name: 'hum',
  height: 170,
} as const; // profileにカーソルを当てると、readonlyな属性に変わっている（ネストされても変わるからめっちゃ便利）
profile.name = 'voodoo';
profile.height = 200;
