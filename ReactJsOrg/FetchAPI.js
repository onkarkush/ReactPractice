import React from 'react';

class FetchAPI extends  React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hits: [],
            error:null,
            isLoaded:false,
            items:[]
          };

          this.FetchData = this.FetchData.bind(this);
    }

    componentDidMount(){
        this.FetchData()
    }

    FetchData(){ 

                fetch("http://jsonplaceholder.typicode.com/posts")
                .then(res => res.json())
                .then((result)=>{
                    
                    this.setState({
                        items:result,
                        isLoaded:true
                    })
                },
                (error)=>{
                    this.setState({
                        isLoaded:true,
                        error
                    })
                })
    }
    render(){
            console.log("this.state"+this.state.items)
        return(
            <div>Fetch FetchAPI HI
                {
                    //console.log("state items---",this.state.items)
                    this.state.items.map(item => {
                        return(
                            <div>{item.title}</div>
                        )
                    })
                }
            </div>
        )
    }

}

export default FetchAPI;