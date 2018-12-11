import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class ComponentAPI extends Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
     };

   render() {
      return (
         <div>
                 <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}
export default ComponentAPI;