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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

function fetchPersonById (id){
  return new Promise((resolve, reject) => {
    setTimeout(
        () =>{
      if (persons.some(searchId => searchId.id === id)){
        const matchedID = persons.find( searchId => searchId.id === id);
        const personID = matchedID.firstName +' '+ matchedID.lastName;
        resolve(personID);
      }
      
      else{
        reject("personal ID not found");
      }
    }, 2000)

  });
}

function fetchJobById (id){
  return new Promise((resolve, reject) => {
    
    if (jobs.some(searchId => searchId.id === id)){
      const personID = jobs.find( searchId => searchId.id === id).jobTitle;
      resolve(personID);
    }

    else{
      reject("Job ID not found");
    }

  });
}

const promise1 =fetchPersonById(1);
const promise2 =fetchJobById(2);
Promise.all([
promise1,
promise2
])
.then(Values => console.log(`Name : ${Values[0]}, Job : ${Values[1]}`))