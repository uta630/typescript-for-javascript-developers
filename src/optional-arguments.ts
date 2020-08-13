export {};

// オプショナルな引数 = あってもなくても大丈夫な引数
// 引数名の末尾に ? をつけるだけ

// 通常の引数の指定
// bmi関数には、引数として height, weight が必須
let bmi1: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

bmi1(1.9, 100);

// オプショナルな引数の指定
// bmi (身長, 体重, console.log)
// console.log はあってもなくてもいいとする
// これには、型指定のkey末尾に ? を付与することで設定できる
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log({ bmi });
  }

  return bmi;
};

bmi2(1.9, 100);
bmi2(1.9, 100, true); // printable 表示
bmi2(1.9, 100, false);
