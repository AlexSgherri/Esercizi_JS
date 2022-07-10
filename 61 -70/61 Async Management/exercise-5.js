const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const matchedID = persons.find((searchId) => searchId.id === id);
      if (matchedID) {
        const personID = `${matchedID.firstName} ${matchedID.lastName}`;
        resolve("Name : " + personID);
      }
        reject("personal ID not found");
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const personID = jobs.find((searchId) => searchId.id === id);
      if (personID) {
        resolve("Job : " + personID.jobTitle);
      }
        reject("Job ID not found");
    }, 500);
  });
}

const promise1 = fetchPersonById(2);
const promise2 = fetchJobById(3);
Promise.race([promise1, promise2])
.then((Values) =>
  console.log(Values))
  .catch(err => console.log("Errore : "+ err));
