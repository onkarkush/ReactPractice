import React,{Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 'fdd'
        }
        
        console.log(props)
        console.log(this.props.count)
    }

    render(){

        return( 
            <div>
                <h1>
                   <p>{this.props.count}</p>
                   <button className="btn">Increase</button>
                    </h1>
                </div>
        )

    }
}
/*
function Counter(props){
    return( 
        <div>
            <h1>
               I am Counter
               <p>{props.count}</p>
               <button>Increase</button>
                </h1>
            </div>
    )
}*/


function mapStatetoProps(state){
   var  count = "fgf";
return{
   count: state.count
}

}

export default connect(mapStatetoProps)(Counter)