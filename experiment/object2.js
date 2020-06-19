let Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Member.prototype = {
  getName: function() {
    return this.firstName + ' ' + this.lastName
  },
  toString: function() {
    return this.firstName + this.lastName
  }
};

let mem1 = new Member('山田', '太郎');

console.log(mem1.getName());
console.log(mem1.toString());

Member.version = '1.0';
