export {};

const kansu = (): number => 24;

// 型を考えずに処理するなら any型
let numberAny: any = kansu();
let sumAny = numberAny + 10;
// 型を考えないなら ts の意味がないので、一時的に使うのが良い

// だが、any で型チェックを内包するなら unknown型 で未知とさせ
// typeof で型を見てから処理させよう
// typeofで型を絞って処理を積んでいく
let numberUnknown: unknown = kansu();
// let sumUnknown = numberUnknown + 10; // unknown型なので、「数値計算には使えないかもよ？」みたいなエラーになる
// 型ガード：typeofで型を確認して処理を行うこと
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10; // 型ガードを使って、型が入った時の処理を記述する
}

// any型に逃げるのではなく、unknown型とすることで
// 実行時のエラーを極力避けることができる

// unknown型自体は使用頻度が高くないが
// 特徴を捉えておこう
