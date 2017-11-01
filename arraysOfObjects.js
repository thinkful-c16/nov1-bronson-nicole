'use strict';

const people = [
  {
    name: 'Bob',
    jobtitle: 'mechanic' 
  },
  {
    name: 'Lucy',
    jobtitle: 'teacher'
  },
  {
    name: 'Jill',
    jobtitle: 'engineer'
  }
];

people.forEach(person =>
  console.log(`${person.name} is a ${person.jobtitle}`)
);