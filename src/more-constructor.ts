export {};

// 通常のclass
class Person1 {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const me = new Person1('Taro', 11);
console.log(me); // Person1 { name: 'Taro', age: 11 }

// typescript 独特な初期化処理
class Person2 {
  // constructorの引数にアクセス修飾子を付与することで初期化処理ができる
  constructor(public name: string, protected age: number) {}
}
const you = new Person2('Hanako', 22);
console.log(you); // Person2 { name: 'Hanako', age: 22 }
