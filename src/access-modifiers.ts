export {};

class Person {
  // アクセス修飾子 : 外部からの呼び出しに制約をかけられる
  // メンバ変数を定義している場所で、アクセス修飾子を宣言できる
  // public, private, protected
  public name: string; // public : どこでも呼び出せる, デフォルトなので書かなくていい, ここでは例として記述
  private age: number; // private : class内なら呼び出せるが、派生class（子class, サブclass）からは呼び出せない
  protected nationality: string; // protected : class内なら呼び出せる, 派生class（子class, サブclass）でも呼び出せる
  // private, protected は外部から「直接」は呼べない, でもメソッド（ここにでは profile）からなら呼べる

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');

console.log(taro.name);
// console.log(taro.age); // private なので外から呼び出せない
// console.log(taro.nationality); // protected なので外から呼び出せない
console.log(taro.profile()); // インスタンスからなので、ageが取れる

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality); // 親classの constructor を呼べるので、引数に値を渡してあげる
  }

  profile(): string {
    // return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`; // age は親classで private　なので呼び出せない
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}
