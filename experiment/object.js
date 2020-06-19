let Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function() {
    return this.firstName + ' ' + this.lastName;
  }
};

let mem1 = new Member('山田', '太郎');
console.log(mem1.getName());

Member.prototype.greeting = function () {
  return this.firstName + 'です。'
};

Member.prototype.age = function (age) {
  this.age = age;
};

console.log(mem1.greeting());
mem1.age = 20;
console.log(mem1.age);
mem1.sex = '男';
console.log(mem1.sex);

delete mem1.sex;
console.log(mem1.sex);

// call
let data = 'Data';
let data1 = { data: 'foo' };
let data2 = { data: 'bar' };

function hoge() {
  console.log(this.data);
}

hoge.call(null);
hoge.call(data1);
hoge.call(data2);
