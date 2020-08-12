export {};

// pitcher/batter それぞれ定数に型指定するが、
// 形に指定されてないものは入れられない
type Pitcher1 = {
  throwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};
const sasaki: Pitcher1 = {
  throwingSpeed: 150,
};
const suzuki: Batter1 = {
  battingAverage: 0.3,
  // throwingSpeed: 140, // エラー
};

// では２つの特徴を持った type を作る...？
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

// intersection型 を使えば、スマートにかける
type TwoWayPlayer = Pitcher1 & Batter1;
const tanaka: TwoWayPlayer = {
  throwingSpeed: 140,
  battingAverage: 0.2,
};

// 宣言時でも intersection型 は書ける
const takahashi: Pitcher1 & Batter1 = {
  throwingSpeed: 140,
  battingAverage: 0.2,
};
