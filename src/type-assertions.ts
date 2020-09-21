export {};

// 型アサーション（表明）
// 例えば変数にany型が使用されていたとした時、
// any型には型の制約がないが、入力されている型が自明だった場合、any型から型を変換することができる = これがアサーション
// とはいえ、どんな型にも変換できるわけではなく、互換性があることが前提

let name: any = 'hum';
let length = name.length as number;
// let length = (name as string).length; // nameにはstring型が入っているため、lengthを取るとnumber型なことが型推論から設定され、下記の代入がエラーとなる
// let length = (<string>name).length; // 非推奨 : jsx記法に似ているため
length = 'foo';
