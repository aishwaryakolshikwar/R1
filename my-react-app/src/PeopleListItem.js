import React from 'react';
import './PeopleListItem.css';

export const PeopleListItem = ({ person }) => (
    <div className="list-item-conatiner">
    <h3>{ person.name }</h3>
    <p> age: {person.age }</p>
    <p>hairColor: {person.hairColor}</p>
 </div>
)