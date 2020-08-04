export {};

// UnionTypesは配列に入る型の順序に制約はない = データがすり替わる可能性がある
// 順序に制約を付けるには tuple型 を使う
let profile: [string, number] = ['hum', 43];
// profile = [43, 'hum']; // error
console.log({ profile });
