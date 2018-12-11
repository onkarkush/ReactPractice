import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class SearchRedirect extends Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        alert("Ok");
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
     };

   render() {
      return (
         <div>
                 <button onClick = {this.setStateHandler}>SET STATE</button>
                 {this.state.data}
         </div>
      );
   }
}
export default SearchRedirect;