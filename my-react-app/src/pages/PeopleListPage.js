import React from "react";
import { PeopleList } from '../PeopleList';

const people = [{
    name:'Aishwaryakol',
    age:22,
    hairColor: 'brown',
  }, {
    name:'Vaibhavkol',
    age:20,
    hairColor: 'red',
  },{
  name:'Tejaskol',
    age:19,
    hairColor: 'black',
  }];

  export const PeopleListPage = () => (
    <>
    <h1>The PeopleListPage </h1>
    <PeopleList people={people}/>
    </>
  );