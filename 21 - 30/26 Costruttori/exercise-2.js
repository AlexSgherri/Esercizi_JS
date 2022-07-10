function Person (firstname, lastname) {
  return {
    firstName : firstname,
    lastName : lastname,
    fullName (){
      return (`${this.firstName} ${this.lastName}`)
    }
  }
};

const john = new Person('John', 'Doe');
const simon = new Person('Simon', 'Collins');

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
