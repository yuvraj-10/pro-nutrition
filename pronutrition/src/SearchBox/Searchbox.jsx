import React from 'react';
import './Search.css';
import Display from '../DisplayFoodBox/DisplayFood';


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={values:this.props.details}
    }
    change=()=>{                   
        const input_value=document.getElementById("inp").value;
        if(input_value===""){                 //if seacrh box is empty then pass the whole details to display component
            this.setState({values:this.props.details})
        }
        else{                                 //if you searched for some values then pass those values related details only to the display component
            const avail_values=this.state.values.map(value=>{
                const re=new RegExp(input_value,"gi")
                if(value.name.search(re)>=0){
                    return value;
                }
                return "";
            }).filter(value=>typeof(value)==="object")
            this.setState({values:avail_values});
        }    
    }
    render(){
        console.log(this.state.values)
    return (<div className="search">
            <div>Search</div>
            <input type="text" id="inp" placeholder="Enter the fruit name" onChange={this.change}></input>
            <Display details={this.state.values} />
            </div>)
    }
}
export default Search;