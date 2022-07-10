// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let salary = 1000;
  if (role === 'ceo'){
    salary += 1200;
  }
    else if (role === 'manager'){
      salary += 800;
    }
    else if (role === 'cto'){
      salary += 800;
    }
    else if (role === 'developer'){
      salary += 500;
    }
  return salary;
}

function maggiora(numero){
  if (numero < 10){
    return numero +1;
  }
  return numero;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);





const maggiorare = maggiora(5);
console.log(maggiorare);