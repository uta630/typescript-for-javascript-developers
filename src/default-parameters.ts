export {};

// 引数の初期値
// javascriptの初期値と同様に設定できる
// ここでは rate に初期値を設定
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));
