export {};

let absence: null = null;
// absence = 'null'; // error
console.log({ absence });

let data: undefined = undefined;
// data = 'undefined'; // error
console.log({ data });

// プリミティブ型の構成要素として存在
// TypeScriptチームは、nullを使いません : https://typescript-jp.gitbook.io/deep-dive/recap/null-undefined#jie-lun
// nullをnullableとして使える
