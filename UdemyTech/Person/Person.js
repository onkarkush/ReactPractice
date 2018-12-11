import React from 'react';
import './person.css';
function person(props){
return (
  <div>
  <h1>From Person {props.name}{props.age}{props.click}</h1> 
  <p>{props.children}</p>
  </div>
)
}

export default person;