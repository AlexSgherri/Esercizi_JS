// function getKeys(obj) {
//   return  Object.keys(obj);
// }

function getKeys(obj) {
  const keyz = [];
  for (const key of Object.keys(obj)) {
    console.log(key)
  }
  return 
}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  city: "Rome",
  job: "Developer",
};

console.log(person);
const keys = getKeys(person);
console.log(keys);
