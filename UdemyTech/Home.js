import React,{Component} from 'react';
import Person from './Person/Person'
import Car from './Person/Car'

class UdemyTech extends Component {
    
    state = {
        Person:[
            {Name: "Onkar",Age:"24"},
            {Name: "Onkar",Age:"24"},
            {Name: "Onkar",Age:"24"},

        ],
        newState: "New stae value"
    }
    switchNameHandler=(ArgName)=>{
        this.setState({
            Person:[
                {Name: ArgName,Age:"23"},
                {Name: "Santosh",Age:"26"},
                {Name: "Rahul",Age:"22"},
    
            ]
        }
        );
    }

    nameChangeHandler=(event)=>{
        this.setState({
            Person:[
                {Name: "Abhishek",Age:"23"},
                {Name: event.target.value,Age:"26"},
                {Name: "Rahul",Age:"22"},
    
            ]
        }
        );
    }


    render(){
        return(
            <div>
            <Car click = {this.switchNameHandler.bind(this, 'JaiPrakash')}
                namechange = {this.nameChangeHandler} 
                name = 'Heloo'/>
            <Person  name = {this.state.Person[0].Name} age = {this.state.Person[0].Age } >What is this</Person>
            <Person  
            name = {this.state.Person[1].Name} 
            age = {this.state.Person[1].Age}
            click = {this.switchNameHandler}>What is this</Person>
            <Person  name = {this.state.Person[2].Name} age = {this.state.Person[2].Age} click = {this.switchNameHandler}>What is this</Person>
            <button onClick = {this.switchNameHandler}> Click Me </button>

            </div>
        );
    }

}

export default UdemyTech;