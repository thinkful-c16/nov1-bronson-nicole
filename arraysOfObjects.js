'use strict';

const Emply1 = {
  name: 'John',
  jobtitle: 'Founder',
  boss: null
};

const Emply2 = {
  name: 'Bob',
  jobtitle: 'mechanic',
  boss: 'John'
};

const Emply3 = {
  name: 'Lucy',
  jobtitle: 'teacher',
  boss: 'John'
};

const Emply4 = {
  name: 'Jill',
  jobtitle: 'engineer',
  boss: 'John'
};

const Employee = [Emply1, Emply2, Emply3, Emply4];

for (let i in Employee) {
  let boss = Employee[i].boss;
  let message = '';
  if (!boss) {
    message = 'does not report to anybody.';
  } else {message = `'reports to ${Employee[i].boss}.'`;}
console.log(`${Employee[i].jobtitle} ${Employee[i].name} ${message}`);
}


// Employee.forEach(person =>
//   console.log(`${person.jobtitle} ${person.name} reports to ${person.boss}.`)
// );