let Animal = function(name) {
  this.name = name;
};

Animal.prototype = {
  walk: function() {
    return 'トコトコ';
  }
};

let Dog = function(age = 1) {
  Animal.call(this);
  this.age = age;
}

Dog.prototype = new Animal();
Dog.prototype.bark = function () {
  return 'ワンワン';
};

let dog1 = new Dog('ポチ', 5);

console.log(dog1.name);
console.log(dog1.age);
console.log(dog1.walk());
console.log(dog1.bark());

let SuperAnimal = function () {};

SuperAnimal.prototype.walk = function () {
  return 'ダダダダダ！';
};

Dog.prototype = new SuperAnimal();
let dog2 = new Dog();

console.log(dog2.age);
console.log(dog1.walk());
console.log(dog2.walk());
