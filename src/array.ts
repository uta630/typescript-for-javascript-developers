export {};

// 推奨
let numbers: number[] = [1, 2, 3];
console.log({ numbers });

let strings2: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];
console.log({ strings2 });

// 非推奨
let numbers2: Array<number> = [1, 2, 3];
console.log({ numbers2 });

let strings: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];
console.log({ strings });

// Array<T> -> 別の書き方になってしまうので非推奨
// Array<T> = interface : オリジナルな型を定義するときに使用する
// <T> = Generics : 型を抽象化する, 汎用的な型を作る

// 二次元配列
let nigigenHairetsu: number[][] = [
  [0, 20],
  [10, 30],
];

// 配列に複数の型が入る場合 : UnionTypes（合併型）
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
