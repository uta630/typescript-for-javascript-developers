export {};

// constructor parameters : classのインスタンスを作る際の引数の型を抽出できる

// 簡単な class を作成したとする
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let taro = new Person('taro', 30);
console.log(taro);

// classの型を代入して型を作る
type PersonType = typeof Person;

// ConstructorParameters を使ってこれを引き出すと、Personで指定したconstructorの引数の構造が型として取得できる
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ['hum', 30];
const hum = new Person(...profile);
console.log(hum);

// ConstructorParameters の掘り下げ
type MyConstructorParameters<
  T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
// new を使って返ったもの = classで作ったものを使うことが前提
// P は引数の型, つまり。new演算子で作る引数の型が入ることがわかる
