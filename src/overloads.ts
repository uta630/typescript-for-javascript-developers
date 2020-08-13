export {};

// オーバーロード：プログラミング全般の機能
// 一つの関数で、引数の数だったり、戻り値の違う関数を定義すること

function doubleNumber(value: number): number {
  return value * 2;
}
// console.log(doubleNumber(100));
function doubleString(value: string): string {
  return value + value;
}
// console.log(doubleString('Go'));

// 上記２個の関数をオーバーロードするには シグネイチャー を使う
// シグネイチャー = 概略 または DBのスキーマ定義 のようなもの
// 関数の実体の前に宣言するがシグネイチャーにあたる
function double(value: number): number;
function double(value: string): string;

// 関数の実体の方では、型指定の制約は行わない
// なので any型 を使用
// 型の指定を行うのはシグネイチャーの役割なので any で問題ない
// ちなみに、ここでは number/string を宣言しているが、これ以外が入るとエラーとなる
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}
console.log(double('Go'));
console.log(double(12));
// console.log(double(true)); // コンパイルエラー, 関数内まで処理が通ないので、例外処理はいらないことがわかる

// シグネイチャーをコメントアウトすると、boolean型の処理（double(true)）も通るようになる
// シグネイチャーが関数の門番のような働きをしてくれていることがわかる
