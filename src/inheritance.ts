export {};

// class の定義
class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}
// インスタンス生成と出力
let animal = new Animal('Mickey');
console.log(animal.run());

// classの 継承
class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    // 親classから引数を引き継ぐ場合は super(...) で初期化して継承できる
    super(name);

    // 継承したclassと子classで指定する変数は、別で初期化してあげた方が、バグが起こりづらいだろう
    // なので、 speed は メンバ変数/constructor/初期化 としてあげる
    this.speed = speed;
  }

  // superは、親classのメソッドも呼び出せる
  run(): string {
    const parentMessage = super.run(); // 親classのrunメソッドを持ってこれる
    return `${super.run()} ${this.speed}km`;
  }
}
// 継承したclassでインスタンス生成と出力
let lion = new Lion('Simba', 80); // Lionには引数nameが設定されていないが、継承元で設定されているので入力できる
console.log(lion.run());
