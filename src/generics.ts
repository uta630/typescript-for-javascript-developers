export {};

// generics ジェネリクス = 汎用的な

// const echo = (arg: number): number => {
//   return arg;
// };
// const echo = (arg: string): string => {
//   return arg;
// };
// -> 型が異なるだけで、やっていることが同じ関数を共通化したい...

// ジェネリクスなコードにリファクタリング
// T が抽象的な型の役割を担う = 型引数, T = Type
// T は同じ方を表し、以下の内容だと「引数の型と返り値の型が一致してい」ということになる
const echo = <T>(arg: T): T => {
  return arg;
};
// 関数を呼び出し、関数名の後に<>を用いて型を指定してあげる
// また、引数を代入する
console.log(echo<number>(100)); // 100
console.log(echo<string>('Hello')); // Hello
console.log(echo<boolean>(true)); // true

// classで用いるジェネリクス
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
// インスタンスを生成し、class名の後に<>を用いて型を指定してあげる
console.log(new Mirror<number>(123e3).echo()); // 123
console.log(new Mirror<string>('Generics').echo()); // Hello
console.log(new Mirror<boolean>(false).echo()); // false
