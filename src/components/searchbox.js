import React from 'react';

class SearchBox extends React.Component{
 state = {term : ''};

 onInputSubmit = (event)=>{
     event.preventDefault(); //stops the default behaviour of page reloading when a user press enter
     console.log(this.state.term);
     this.props.onSubmit(this.state.term);
 }
    render(){
        return(
        <div>
            <form onSubmit={(event)=>{this.onInputSubmit(event)}}>
                <label><h1>SearchBar</h1></label> <br></br>
                <input type="text" value={this.state.term} onChange={(e)=> this.setState({term:e.target.value})} ></input>
            </form>
        </div>
        )        
    }
}

export default SearchBox;