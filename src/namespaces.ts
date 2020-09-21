export {};

// namespace 名前空間
// 名前空間とは、同一ファイルに同じ名前のclassが存在させる方法
// 考え方としては、PCの同一フォルダに同名のファイルが置けないが、別フォルダなら同名のファイルが置ける、というようなもの
// namespace を使って上記で言うフォルダを作ることで、同一ファイル内に同名の class が存在していても問題ない という環境を作ることができる
// これを用いて、名前の競合を防ぐことができる

// namespace = Japanese, class = Person
namespace Japanese {
  // class は export を指定することで、外の空間からアクセスできるようになる
  export class Person {
    constructor(public name: string) {}
  }
}

// namespace = English, class = Person
namespace English {
  class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// namespace で class を作成すると、呼び出しが通常と異なる
// 通常のインスタンス生成
// const me = new Person('hum');
// console.log(me.name);

// namespace でのインスタンス生成
const me = new Japanese.Person('hum'); // export が指定されていれば、外の空間から呼び出せる
console.log(me.name);
// const you = new English.Person('hum'); // export が指定されていないので、エラーになる

// namespace を入れ子（ネスト）にすれば、namespace内で同様のことができる
// 外部からのアクセスは、同様に export で引き出せる
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
const metokyo = new Japanese.Tokyo.Person('hum'); // export が指定されていれば、外の空間から呼び出せる
console.log(metokyo.name);
// const youOsaka = new Japanese.Osaka.Person('hum'); // export が指定されていないので、エラーになる
