export {};
// export {}; -> javascriptの仕様上、moduleシステムを導入しないと、グローバル空間に変数を定義することになる（グローバルを汚染する危険性）
// これを防ぐためにexportし、moduleシステムとすることでエラーを回避
// let name = 'TypeScript'; -> export をコメントアウトし、これをを先頭に記述するとエラーになる

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1; // error
console.log({ isFinished });
