class Person {

  set FirstName(newFirstName){
    this.firstName = newFirstName;
  }

  get FirstName(){
    return this.firstName;
  }

  set LastName(newLastName){
    this.lastName = newLastName;
  }

  get LastName(){
    return this.lastName;
  }

  set Age(newAge){
    this.age = newAge;
  }

  get Age(){
    return this.age;
  }

  fullName(){
    return (`${this.FirstName} ${this.LastName}`);
  }


  constructor(firstName, lastName, age){
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Age = age;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName());
person.FirstName = 'Maria';
person.LastName = 'Verdi';
console.log(person.fullName());