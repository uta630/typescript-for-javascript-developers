export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude
type FunctionType = Exclude<SomeTypes, string | number>;
// Extract
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// Non Nullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

// 三項演算子の記法で、ConditionalTypes という物を記述できる
// これは、Exclude/Extract などの定義で使われている
// Excludeでは = type Exclude<T, U> = T extends U ? never : T;
// <T, U> の T = Type, U = UnionType
// extends は互換性を見ている

// ConditionalTypes を解体していくと以下のようになる
// SomeTypes から string/number を除外しようとすると
type MyExclude1<T, U> = T extends U ? never : T;
type MyFunctionType1 = MyExclude1<SomeTypes, string | number>;

// U がなくなり、
type MyExclude2<T> = T extends string | number ? never : T;
type MyFunctionType2 = MyExclude2<SomeTypes>;

// <> がなくなり、
type MyExclude3 =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);
type MyFunctionType3 = MyExclude3;

// extends を評価して、DebugTypeが残る = 除外できる
type MyExclude4 = never | never | DebugType;
type MyFunctionType4 = MyExclude3;
