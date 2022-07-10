const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = 'Mark';
// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);

// Vengono modificati entrambi gli oggetti poiché con questa dichiarazione si sta facendo
// riferimento allo stesso indirizzo di memoria, quindi avremo una shallow copy
// per creare due oggetti partendo da un oggetto base potremmo utilizare Object.assign