function getTriangle(base, height) {
  return base * height / 2
}

console.log(getTriangle(10, 20));

// 非推奨
let getSquare = new Function('base', 'height', 'return base * height');

console.log(getSquare(20, 10));


// 関数リテラルを定義する
let getEvel = function(ary) {
  let result = ary.filter(function(value) {
    return value % 2 === 0;
  });
  return result
}

let numbers = [1, 2, 3, 4, 6]
console.log(getEvel(numbers));

// アロー関数
let getDouble = (num) => {
  return num * 2;
}

console.log(getDouble(2));

let ary = [1, 3, 5];
let result = ary.map(getDouble);
console.log(result);
