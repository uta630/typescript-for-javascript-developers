export {};

// 関数の戻り値の型を返してくれる

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 3));

type ReturnTypeFromAdd = ReturnType<typeof add>;
