export {};

// Record<K, T>
// ２つのジェネリクス型を持つ特殊な型
// １つ目の型 K には、UnionTypeが指定される

// 例えば以下の２つのような型があったとする
type Prefectures = 'Tokyo' | 'Osaka' | 'Hukuoka';
type Person = {
  kanji: string;
  count: number;
};

// 定数 persons で、これらを用いた情報を管理するとした場合、
// persons: { Tokyo: persons, Osaka: persons, ... }
// と書かなければいけないが、同じ情報を繰り返し記述するのはナンセンス

// これをうまく実現するために Record<K, T> を用いる
// K はオブジェクトの Key, T はオブジェクトの値の Type の略
// Key を指定するため、UnionType が用いられる
const persons: Record<Prefectures, Person> = {
  Tokyo: { kanji: '東京', count: 100 },
  Osaka: { kanji: '大阪', count: 200 },
  Hukuoka: { kanji: '福岡', count: 300 },
  // Chiba: { kanji: '福岡', count: 400 }, // エラー : Chiba は型指定されていない
};

// ここでは Prefectures が Key となり、Person が Type になる
