export {};

// classのインスタンスは new を使って具体的なオブジェクトを個々で生成する
// new で生成する時にそれぞれで引数を渡して生成する
// 各オブジェクトで固有（ユニーク） = 動的メンバ

// これに対し、変化しない（いつも決まった）メンバを持たせたい class設計 もある
// インスタンスを作らなくても class にアクセスしたいという用件もある
// このような用件で使用できるのが 静的メンバ

class Me {
  // 通常のメンバ変数の定義 : 外部からアクセスできる
  // isProgrammer: boolean = true;
  // firstName: string = 'voo';
  // lastName: string = 'doo';

  // 静的メンバ で定義 : 外部からアクセスできなくなる
  static isProgrammer: boolean = true;
  static firstName: string = 'voo';
  static lastName: string = 'doo';

  // constructorにによる動的な設定は行わない
  // しかし、new によってインスタンスを作らないとアクセスできない

  // メソッドの静的な定義
  static work() {
    // return 'Hey, guys!';
    return `Hey, guys! This is ${this.firstName}!`; // firstName =  x, this.firstName = o (, Me.firstName = o )
  }
}

// let me = new Me();
// console.log(me.isProgrammer); // エラー : 静的メンバ にすると、外部から読み取れなくなる
console.log(Me.isProgrammer); // class名でアクセスすると読み取れる, インスタンスを生成しなくてもアクセスできる
console.log(Me.work()); // 静的メソッドの呼び出し
