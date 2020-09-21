export {};

// Nullable な値
// tsのlintがあるからエラーを事前に検知できるが、そうもいかないこともある
// nullを許容していないのに、指定していることなんてことがある
// そんな時に Nullable な型を指定できると、事前にエラーを回避できる
// これは UnionTypes（合併型）で指定することで解決できる

let profile: { name: string; age: number | null } = {
  name: 'hum',
  age: null, // number/ or null の型
};
