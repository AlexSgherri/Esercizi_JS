const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.parse(JSON.stringify(person, Object.entries(person).filter((element) => typeof person[element] == 'number'))) // [ 1, 25]
console.log(json); // Should return: { id: 1, age: 25 }