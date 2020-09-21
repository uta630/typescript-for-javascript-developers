export {};

// 型の互換性

// 互換性あり
let fooCompatible: any;
let barCompatible: string = 'TypeScript';
console.log(typeof fooCompatible); // undefined
fooCompatible = barCompatible; // any型の変数にstring型の変数を代入 = 互換性がある
console.log(typeof fooCompatible); // string

// 互換性なし
let fooIncompatible: string;
let barIncompatible: number = 1;
// fooIncompatible = barIncompatible; // エラー : string型の変数にnumber型の変数を代入 = 互換性がない

// 互換性あり
let fooString: string;
let barString: string = 'string';
fooString = barString; // string型の変数ににstring型の変数を代入

// 互換性あり
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // string型は文字/文字列を許容するので問題ない

// 互換性あり
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral; // fooNumberは数値全体を許容するため問題ない

// 互換性あり
interface Animal {
  age: number;
  name: string;
}
class Person {
  constructor(public age: number, public name: string) {}
}
let me: Animal;
me = new Person(30, 'hum');
// Person/Animal は関係のない class/interface
// 各々の型が一致しているかは関係ない
// 代入される変数（Person）の内部で持つメンバが、代入するオブジェクト（Animal）の中でも存在するか
// そして、そのメンバの型に互換性があるかを評価する
// 構造的部分型
