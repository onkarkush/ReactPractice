import React from 'react';
//import ReactDOM from 'react-dom';

class Forms extends React.Component { constructor(props) {
  super(props);
  this.state = {value: '',textareak :'',flavor:['mango','lime']};

  this.handleChange = this.handleChange.bind(this);/*
  this.handleTextareaChange = this.handleTextareaChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);*/
}

handleChange(event) {
  console.log("event.target",event.target);
  console.log("event.target.name",event.target.name);
  console.log("event.target.value",event.target.value);
  const name = event.target.name;
  const value = event.target.value
  this.setState({[name]:value});
  console.log("this.state",this.state);
  
}
handleTextareaChange(event) {
  this.setState({textarea: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value+ this.state.textarea);
  event.preventDefault();
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
      </label>
      <label>
          Essay:
          <textarea name="textarea" value={this.state.textarea} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite flavor:
          <select name="flavor" multiple={true} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
  }
 

  export default Forms