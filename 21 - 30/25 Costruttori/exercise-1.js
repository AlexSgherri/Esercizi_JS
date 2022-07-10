const person =  {
    get getFirstName(){
      return this.firstName;
    },
    
    set setFirstName(newName){
      return this.firstName = newName;
    },

    get getLastName(){
      return this.lastName;
    },

    set setLastName(newLastName){
      return this.lastName = newLastName;
    },

    fullName (){
      return (`${this.getFirstName} ${this.getLastName}`)
    }
 };

console.log(person)
const john = Object.create(person);
john.firstName='John';
john.lastName='Doe';

const simon = Object.create(person);
simon.firstName ='Simon';
simon.lastName ='Collins';

console.log(simon.firstName);
 console.log(john.fullName()); // John Doe
 console.log(simon.fullName()); // Simon Collins