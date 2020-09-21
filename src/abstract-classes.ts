export {};

// 抽象メソッド と 抽象クラス

// 抽象メソッドは、オーバーライドが必須のメソッド
// 処理の実態がない
// 「こんな名前のメソッドがありますよ」という宣言
// このような宣言を シグネチャー という（overloads.tsでも出たもの）

// また、抽象メソッド は 抽象クラス の中に定義されていなければいけない

// メソッドもクラスも「abstract」を前に記述するだけでOK
abstract class Animal {
  abstract cry(): string;
}

// 継承してcryをオーバーライド
class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

// 継承のみ
class Tiger extends Animal {}
// 上記だけでは、cryメソッドを定義していないのでエラーになる（実装忘れなどで起こりうる内容）
// この仕様により、エラーやバグを回避できる
