export {};

// Pick : 選ぶ
// Omit : 省く

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// Pick : 型から特定のものだけ持ってきたい（欲しいものだけを選ぶ）
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// 詳細
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// Omit : 型から特定のものだけ除外して持ってくる（いらない物を省く）
type SmallProfile = Omit<DetailedProfile, 'height'>;
// 詳細
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// K がなくなり、
type MyOmit1<T> = Pick<T, Exclude<keyof T, 'height'>>;
type MySmallProfile1 = MyOmit1<DetailedProfile>;

// T がなくなり、
type MyOmit2 = Pick<
  DetailedProfile,
  Exclude<'name' | 'height' | 'weight', 'height'>
>;
type MySmallProfile2 = MyOmit2;

// Exclude がなくなって、Pick が残る
type MyOmit3 = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile3 = MyOmit3;
