export {};

// 関数で使うtypescript
// typescriptで注意するのは 引数 と 返り値
// あとはjavascriptと同じに書ける

// 関数での使用例
// function name(params: type): returnValueType {
//   ...処理...
//   return value; <- returnValueTypeで指定した型で返す
// }

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.68, 56.75));
