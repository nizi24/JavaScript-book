import { Member } from './lib/member.js';

class BusinessMember extends Member {
  constructor(firstName, lastName, clazz) {
    super(firstName, lastName);
    this.clazz = clazz;
  }

  work() {
    return super.getName() + 'は働いています。';
  }

  getName() {
    return super.getName() + ' 役職：' + this.clazz
  }

  static greeting() {
    return 'こんにちは！';
  }
}

let mem1 = new BusinessMember('山田', '太郎', '部長');
console.log(mem1.getName());
console.log(mem1.work());
console.log(BusinessMember.greeting());
