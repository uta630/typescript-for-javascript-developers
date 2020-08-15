export {};

// 要件
// * owner : 所有者名
//   * 初期化時に設定できる
//   * 変更できない
//   * 参照できる
// * secretNumber : 個人番号
//   * 初期化時に設定できる
//   * 変更できない
//   * 参照できない

// owner/secretNumber の要件定義を元にclassを作成する
// 変更/参照 は アクセス修飾子で賄えない部分がある
// この時、アクセサーを作成してこれを可能にする
class MyNumberCard {
  // アクセサーに用いるメンバ変数の登録は _... とする
  // これはアクセサーのメソッド名との重複するのを避けるため
  // 慣習として先頭に _ が用いられる
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // アクセサー : getter/setter, get/set
  // getter : 参照用メソッド = typescriptでは先頭 get から記述する
  get owner() {
    return this._owner;
  }
  // setter : 更新用メソッド = typescriptでは先頭 set から記述する
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Taro', 1234567890);

// card.owner = 'Hanako'; // 読み込み専用なので、代入できない
console.log(card.owner);
// card._secretNumber; // 読み込み専用なので、代入できない
card.secretNumber = 9876543210;
console.log(card.debugPrint()); // 9876543210 -> 1234567890から更新されている
