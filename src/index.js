import Person from './models/Person';

const person1 = new Person('Shathish', 'Kumar');
person1.log();

console.log('Using generator features');

const letterGenerator = function* () {
  yield 'a';
  yield 'b';
  yield 'c';
};

const gen1 = letterGenerator();
let value;
while((value = gen1.next().value)) {
  console.log(value);
}