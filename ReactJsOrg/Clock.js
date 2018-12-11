import React from 'react';
//import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
     
    }

    
    componentDidMount(){ 
      setInterval(() =>  this.updateDate(),1000)
        }

    updateDate(){
      this.state.udate = new Date();
       this.setState({udate:this.state.udate.toLocaleTimeString() })
     }
    render() {
      
      return (
        
        <div>
          {this.state.udate}
        </div>
      );
    }
  }
  /*
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );*/

  export default Clock