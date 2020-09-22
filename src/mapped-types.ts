export {};

// Mapped Types

// Partial があったとする
type Profile = {
  name: string;
  age: number;
};
type PartialProfile = Partial<Profile>;
// Partial にカーソルを当てると、 { [P in keyof T]?: T[P] | undefined; } と出てくる
// [P in keyof T]?: T[P] | undefined; これはインデックスシグネチャの記法

// keyof を用いると、文字列型のUnionTypesで持ってこれる
// PropertyTypes にカーソル当てるとわかる
type PropertyTypes = keyof Profile;

// T がオブジェクトを文字列リテラル型で持ってきていて、これを P として扱っている
// T[P] は Profile["name"] となる
// これを in keyof でマッピング処理することで、Partial を実現している

// また、? とすることで、オプショナルを実現している
// これは Partial を右クリックし、「定義へ移動」すれば確認できる
// TypeScriptの仕様で定義されているが、元はマッピングして作られたもの

// つまり、自分で作るとしたら、以下のよう記述すればできる
type Optional<T> = {
  [P in keyof T]?: T[P];
};
type OptionalProfile = Optional<Profile>;

// Nullable型とするには、以下のようにする
type OptionalAndNullable<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalAndNullableProfile = OptionalAndNullable<Profile>;
