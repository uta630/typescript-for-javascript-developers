export {};

// void型と異なり、数ある関数の中で、neverだけが呼び元に戻ってこない = 例外処理だから（throw）
// void型はundefinedが呼び元に帰ってくる = returnされる
// never = this function will never return.の略...？

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

// let foo: void = undefined; // voidにはundefinedが含まれるので問題ない
// let bar: never = undefined; // neverには「値」の概念がないのでエラー

let baz: never = error('only me!'); // never型の変数には代入できる,が、利用シーンは分からない, こういう言語仕様
