export {};

// utility types : Pertial と Required
// utility typesは、TypeScriptが提供している便利な型のこと
// Pertial と Required で、プロパティの必須とオプショナルを切り替える

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// Pertial
// 全てのプロパティがオプショナルな型になる
// 例えば上記 Profile をオプショナルにして使いたくなったとしたら
// 新しいtypeを用意し、型を Pertial<xxx> で指定することで実現できる
// <xxx> の部分は型引数（ジェネリクスの記法で用いた）
// Pertial<xxx> は の xxx には、参照する型を指定する
type PertialTyps = Partial<Profile>;

// Required
// 全てのプロパティが必須の型になる
// Pertialと同じように Required<xxx> で実現できる
type RequiredTyps = Required<Profile>;
