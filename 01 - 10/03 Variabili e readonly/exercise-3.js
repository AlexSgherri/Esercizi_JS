const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

// I valori all'interno dell'array possono essere modifica ma non può essere modificato l'array in se

addStudent('Marco');
console.log(students);