export {};

// 単純な記法, 故に内部の制約がない
let profile1: object = { name: 'hum' };
profile1 = { birth: 2020 };

// objectは {} とも表せる
// {} では、プロパティにも型指定ができる
let profile2: {
  name: string;
} = { name: 'hum' };
profile2 = { name: 'bug' };
// profile2 = { birth: 'ger' }; // keyが型指定されてないのでエラー

// object だけでは型指定の意味がありません
// 極力 {} を用いましょう
