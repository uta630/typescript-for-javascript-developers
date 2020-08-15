export {};

// jsのclass定義
// class は インスタンス（= 実体） を作るために存在する雛形のようなもの
// インスタンスは new演算子で作ることができる
class Person1 {
  // インスタンスから渡ってくる引数は、classのトップレベルで型指定する
  // 型指定は通常と同じ書き方
  name: string;
  age: number;

  // constructor : classの初期化処理を行うもの, インスタンスの引数がここに渡ってくる
  // 返り値を書かないのが typescript の言語仕様
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッド
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// new演算子で Person1 を生成
let taro = new Person1('Taro', 30);
// let hanako = new Person1(); // classがあれば幾つでもインスタンスを生成できる

console.log(taro);
console.log(taro.profile());
