export {};

// 関数の戻り値の型を返してくれる

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 3));

type ReturnTypeFromAdd = ReturnType<typeof add>;

// ReturnType の掘り下げ
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
// <T extends (...args: any) => any> の (...args: any) => any は型を表している
// つまり、関数の型であることが制約となっている

// infer : 推論する = 型として推論した結果を R に代入してくれる
// infer は条件の場所に記載できる特殊なキーワード
// Conditional Types に記述できる無数の条件式の中で、戻り値の型を拾い上げたい時、 infer で指定できる

// MyReturnType の <T extends (...args: any) => any> は T extends (...args: any) => infer R と同義
// つまり、確実に true となる, ということは、 R = 戻り値の型が返ることになる = infer R ? R : any の部分
