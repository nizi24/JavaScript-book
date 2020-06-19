export class Member {
  constructor(firstName, lastName) {
    Object.assign(this, { firstName, lastName })
  }

  getName() {
    return `${this.firstName} ${this.lastName}`
  }
}
