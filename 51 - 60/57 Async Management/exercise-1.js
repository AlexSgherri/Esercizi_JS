const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    
    let obj = persons.find( searchId => searchId.id === id);
    
    if (obj) resolve(obj);
    
    reject("Id non trovato");

  });
}

fetchPersonById(0)
.then(obj => console.log('oggetto: ',obj))
.catch(err => console.log("Errore : ", err));
// code here