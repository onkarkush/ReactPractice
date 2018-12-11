 import React,{Component} from 'react';
 import {connect} from 'react-redux';
 import {addReminder} from '../../action';

class Redux extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder(){
      //  console.log( "this  ---", this.props);
        //alert('test');
       this.props.addReminder(this.state.text)
    }

    renderReminders(){
        const { reminders } = this.props;
        //console.log(reminders);
        return(
            <ul className = "list-group col-sm-4">
            {
               reminders.map(reminder =>{
                   return (
                       <li key = {reminder.id} className="list-group-item">
                         <div>{reminder.text}</div>
                           </li>
                   )
               }) 
            }
            </ul>
        )
    }

     render(){

        return(
            
            <div>
               <h1> Remonder Pro</h1>
               <div className = "form-inline">
               <div className = "">
               <input
               className = "form-control"
               placeholder="I have to.."
               onChange = {event => this.setState({text:event.target.value})}
               />
               <button
               type = "button"
               className = "btn"
               onClick = {() => this.addReminder()}
               >
               Add Item
               </button>
               {this.renderReminders()}
               </div>

               </div>
            </div> 
        );
    }

}

//export default connect(reminders,{addReminder}) (Redux);
function mapStateToProps(state){
    //console.log("State", state);
      return {reminders : state}
   }
   
   export default connect(mapStateToProps,{ addReminder })(Redux);