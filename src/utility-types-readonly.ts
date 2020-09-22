export {};

// typeを指定し、変数に設定する
type Profile = {
  name: string;
  age: number;
};
const me: Profile = {
  name: 'hum',
  age: 30,
};
// 上書きできる
me.age++;
console.log(me);

// 上書きさせないようにするには、 Readonly を使う
// が、 readonly ではなく、 Partialと同じような記法で、
// Readonly<xxx> と用いれば実現できる
// utility 自体は readonly を使っており、
// Partial同様、ジェネリクス記法を用いて実装されている
type ProsonalDataType = Readonly<Profile>;
const friend: ProsonalDataType = {
  name: 'vodoo',
  age: 10,
};
// friend.age++; // エラー
console.log(friend);

// もし作るのであれば...
type UtilityReadonly<T> = { readonly [P in keyof T]: T[P] };
type ReadonlyProfile = UtilityReadonly<Profile>;
