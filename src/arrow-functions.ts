export {};

// アロー関数
// 関数の定義と同じ

// だが、関数を代入している = 無名関数の時と同じ
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height); // return が一行の時の省略記法

console.log(bmi(1.7, 90));
