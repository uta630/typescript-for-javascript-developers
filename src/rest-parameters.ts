export {};

// レストパラメータ（残余引数） = 変数を展開できる（javascriptのやつ）
// これにも型指定ができる

// reduce() で数値の合計を求める関数を作成
const reducer = (accumulator: number, currentValue: number): number => {
  // accumulator = 蓄電池 = return された値が蓄積される（初回は配列の先頭の値が入る）
  // currentValue = 配列の値が順に代入される（初回は配列の２番目が入る）
  return accumulator + currentValue; // 数値の配列なので、合計値を return できる
};

// 通常の型指定と同様に、引数名の後に型指定するだけ
// リストは配列なので [] を忘れずに
const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5)); // 15
