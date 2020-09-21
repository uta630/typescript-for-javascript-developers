export {};

// typescript では、
// 複数の class を継承することはできないが、
// 複数のインターフェースを継承することはできる（多重継承）

// 複数のclassを継承できない
class Wizard {}
class Monk {}
class Taro extends Wizard {}

// 複数のインターフェースなら継承できる
// インターフェースは、継承ではなく、実装（implements）と呼ぶ
interface WiseMan {
  ionazn(): void; // シグネチャー
}
interface Warrior {
  attack(): void; // シグネチャー
}
class Jiro implements WiseMan, Warrior {
  // シグネチャーをオーバーライドしてあげる
  ionazn(): void {
    console.log('ionazn');
  }
  attack(): void {
    console.log('attack');
  }
}

// インスタンスを生成してメソッドを実行
const jiro = new Jiro();
jiro.ionazn();
jiro.attack();
