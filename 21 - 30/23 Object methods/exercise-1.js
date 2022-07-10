const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys
console.log(Object.keys(person))
for (const [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value}`);
}

for (const key of Object.keys(person)) {
  console.log(key);
}
/* La traccia ed il suggerimento mi risultano un po' ambigui,
spero di aver compreso bene il risultato volut */
