export {};

// エイリアスの記法
// 別名に対して代入するので = が必要
type ObjectType = {
  name: string;
  age: number;
};
let object: ObjectType = {
  name: 'hum',
  age: 24,
};

// interface で同じようなことができる（ = はいらない）
interface ObjectInterface {
  name: string;
  age: number;
}
let object2: ObjectInterface = {
  name: 'hum',
  age: 24,
};

// interface自体はClass構文で必要になるが、
// ここでは型指定にフォーカスして解説
