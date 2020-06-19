let ary = [1, 3, 5 ,6]
let result = ary.filter(function(value) {
  return value % 2 === 1;
});

console.log(result);

let map = new Map([['dog', 'ワンワン'],['cat', 'にゃー']]);
map.set('mouse', 'チューチュー')

console.log(map);

let set = new Set();
set.add(1);
set.add(1);
set.add(5);
set.add(10);

console.log(set.has(1));

for (let val of set) {
  console.log(val);
}
