import React, {Component} from 'react';

class Table extends Component {
	constructor(props) {
        super(props)
		this.people = [
			{
				id: "6",
				name: "John Sina",
				birth: "11/30/2011"
			}, {
				id: "4",
				name: "Barcy Washington",
				birth: "09/16/1992"
			}, {
				id: "1",
				name: "Peter Parker",
				birth: "01/16/1992"
			}, {
				id: "8",
				name: "Jimmy Shergil",
				birth: "12/12/2001"
			}, {
				id: "7",
				name: "Alexander Alfred",
				birth: "02/09/1891"
			}, {
				id: "5",
				name: "Krishna Gupta",
				birth: "12/01/1982"
			}, {
				id: "12",
				name: "Sania Mirza",
				birth: "11/30/2011"
			}, {
				id: "0",
				name: "Lata Pathak",
				birth: "10/31/1999"
			}
		];
		this.state={ people : this.people };
		this.onChange = this.onChange.bind(this)
	}
	compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
	}

	compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
	}

	onChange(type) {
		// on radio state change handler
		this.setState({name:"onkar"})
	/*	let myData = this.people.sort((a,b)=>{
			console.log(type.target.value)
			return a.name > b.name;
		})*/
		if(type.target.value == "byName"){
			this.people.sort((a,b)=>{
				console.log(type.target.value)
				return a.name > b.name;
			})
		}
		else if(type.target.value == "byDate"){
			this.people.sort((a,b)=>{
				console.log(type.target.value)
				return a.id > b.id;
			})
	}
		

	}

	render() {
		console.log("Inside render",this.state)
		return (
  <div className='table-div'>
	 <div className='radioButtons'>
    <div className='left'>
      <input type='radio' name="shortDate" onChange={this.onChange} value="byName" />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input type='radio' name="shortDate" onChange={this.onChange}  value="byDate"/>
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
  </div>
    <table className='table table-striped table-bordered table-hover full-width'>
      <thead>
        <tr>
          <th className='course-name'>Person Name</th>
          <th className='duration'>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
					{ this.state.people.map((people,key) => <TableRow data = {people} key={key}/>)}
			</tbody>
    </table>
  </div>
);

	}
}

class TableRow extends React.Component{
	render(){
		return(
			<tr><td>{this.props.data.name}</td><td>{this.props.data.birth}</td></tr>
		)
	}
}

// Uncomment the snippet below
// Table.propTypes = {
// 	sortParameter: PropTypes.string
// }

export default Table;
