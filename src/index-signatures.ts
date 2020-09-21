export {};

// インデックスシグネチャ
// keyに該当する箇所をアノテーションするための署名のこと

// 変数profileに、あとからプロパティを代入していくものとする
let profile1: {} = {};
profile1.name = 'hum'; // 変数宣言時に型が設定されていないのエラーになる

let profile2: { name?: string } = {}; // では型を指定しておく？
profile2.name = 'hum';
profile2.age = 10; // 新しいプロパティができる度に、新しい型指定をするのは現実的じゃない

// そこでインデックスシグネチャ
// keyに該当する箇所をアノテーションするための署名のこと
// 書き方 : { [ index: typeForIndex ]: typeForValue }
// ここでは interface を利用して型を指定する
interface Profile3 {
  [index: string]: string | number | boolean; // index に対する型が string, valueに対する型が string/number/boolean
  underTwenty: boolean; // このbooleanもindexに追加する必要がある
}
let profile3: Profile3 = { underTwenty: false };
profile3.name = 'voodoo';
profile3.age = 40;
profile3.nationality = 'Japan';
