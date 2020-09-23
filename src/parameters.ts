export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};
debugProfile('hum', 30);

// 他人が作った関数の型とか、ライブラリからインポートした型は、容易に変更することができない
// そういった関数から、引数の型を取り出す時、 Parameters を利用する
// Parameters<typeof debugProfile>
type Profile = Parameters<typeof debugProfile>; // 型を取り出すので typeof
const profile: Profile = ['voodoo', 10];
debugProfile(...profile);

// Parameters の掘り下げ
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
// 今まで使ってきたようにこれは ConditionalTypes である
// 概ね ReturnType と同じで、infer が異なる
// extends するkeyの型に対して infer している
