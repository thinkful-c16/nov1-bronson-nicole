'use strict';

const people = [
  {
    name: 'John',
    jobtitle: 'Founder',
    boss: Null
  },
  {
    name: 'Bob',
    jobtitle: 'mechanic', 
    boss: 'John'
  },
  {
    name: 'Lucy',
    jobtitle: 'teacher',
    boss: 'John'
  },
  {
    name: 'Jill',
    jobtitle: 'engineer',
    boss: 'John'
  }
];


people.forEach(person =>
  console.log(`${person.jobtitle} ${person.name} reports to ${person.boss}.`)
);