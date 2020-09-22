export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude : 除外
// ある型から特定の型を 除外 したい時に使う
// Exclude<A, B> // A が対象の型, B が不要な型
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
// DebugType だけじゃなく、関数を除外としたい場合
type TypeExcludeingFunction = Exclude<SomeTypes, Function>; // Function を用いる

// Extract : 抽出
// ある型から特定の型のみ 抽出 したい時に使う
// Extract<A, B> // A が対象の型, B が抽出する型 // Excludeと同じ
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// DebugType だけじゃなく、関数を抽出としたい場合
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// Non Nullable : UnionTypes から null / undefined を排除する
// NonNullable<A> とするだけでOK
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
