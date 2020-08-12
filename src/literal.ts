export {};

// literal型 には３つの型がある
// それは 文字型 / 数値型 / 真偽値
// 「その型ならなんでも良い」は自由度あるが
// 値を固定するには少し足りない
// その時にリテラル型を利用する

// 文字型
// 例えば変数に曜日を入れるとする
let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '31'; // このように、曜日以外の文言をエラーとしたい

// 型名に値を入れると、それ自身が形となる = 文字型リテラル
let animals: '犬' | '猫' = '犬';
animals = '猫';
animals = '虫'; // エラー

// 数値型
// 月を入れたい
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
month = 13; // エラー

// 真偽値
let TRUE: true = true;
TRUE = false; // エラー
// booleanは文法としてあるが
// 使いどころはないでしょう
