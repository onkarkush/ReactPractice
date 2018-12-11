import React from 'react';
function car(props){
return (
  <div>
  <h1 onClick = {props.click}>From Person {props.name} Carrrrrrrs</h1> 
  <input type= "text>" onChange = {props.namechange} value = {props.name}/>
  </div>
)
}

export default car;