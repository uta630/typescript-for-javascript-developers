export {};

// 無名関数
// 関数は関数で引数に型指定する : function(param: type){ ... }
// 無名関数として明示的に型指定をしてあげる : (param: type) => type

// 通常の関数の型指定でも問題ない
let bmi1 = function (height: number, weight: number) {
  return weight / (height * height);
};

// 無名関数の代入に対し、明示的に関数を型として指定することもできる
// ここではbmi2に代入される 無名関数の型指定 がされている（上記で言う (param: type) => type の部分）
// 併せて、関数としての型指定ももちろん行う
let bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
) {
  return weight / (height * height);
};

console.log(bmi2(1.8, 90));
