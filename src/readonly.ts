export { };

// class のプロパティを読み取り専用（readonly）にする時に利用する

class VisaCard {
  // owner: string; 通常のメンバ変数定義
  readonly owner: string; // readonlyの定義（アクセス修飾子）と同じように、メンバ変数前に記述

  // constructorと初期化処理
  constructor(owner: string) {
    this.owner = owner
  }

  // 初期化処理の簡略化 : (アクセス修飾子 readonly key: type) と記述する
  // constructor(public readonly owner: string) {
  //   this.owner = owner
  // }

  // readonly = 「外部からアクセスできる」という意味が内包されているので、記述しなくても問題ない
  // しかし、public の意味合いがわかりづらいので、記述した方が見てわかりやすい（可読性）
  // また、readonly の記述を消す場合、コンパイルエラーとなるので、public は記述しておいた方が管理的にはいいと思われる
}

let myVisaCard = new VisaCard('hum');
console.log(myVisaCard.owner) // readonlyできてる

// myVisaCard.owner = 'voodoo'; // エラー : 代入できない
