export {};

// 関数からreturnがないことを期待する関数はvoid型
function returnNothing(): void {
  console.log("I don't return anything!");
  // return がなければ undefined が返るが、 undefined型ではないので注意
}
console.log(returnNothing());
