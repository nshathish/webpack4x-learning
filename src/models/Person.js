export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  log() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}