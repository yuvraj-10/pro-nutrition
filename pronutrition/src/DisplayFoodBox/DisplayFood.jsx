import React from 'react';
import './DisplayFood.css'

var new_list=[];
var new_value=1;  //used to hold the input value that you selected in the input box
class Display extends React.Component{
    constructor(props){
        super(props);
        this.state={list:[]}
    }
   show=()=>{            //diplay the details of the items 
    const list=this.props.details.map(value=>{
        return(<div className="section1">
            <img src={value.image} alt="pictures" className="pic"></img>
            <div>
            <div className="name">{value.name}</div>
            <div>{value.cal}cal</div>
            </div>
            <div className="input-button">
            <input type="number" min="1" id="ip_val" defaultValue="1" onChange={this.change}></input>
            <button onClick={()=>this.click(value,new_value)}>+</button>
            </div>
        </div>)
        })
    return list;
   } 
   change=(e)=>{          //this function set the new_value to the value that you input in the inputbox
    new_value=e.target.value;
    }
   click=(val,val1)=>{        //this function add the item to the output box when you click the input add button
       let flags=false;
       new_value=1;
       console.log(val1)
       new_list.forEach(item=>{
          if(item[0]===val.name){
              flags=true;
              item[1]+=val1*val.cal
          }
       })
       if(flags===false){new_list.push([val.name,val1*val.cal])} 
       this.setState({list:new_list})
   }
   nextsection=()=>{                //this section shows what are the items that you selected
       if(this.state.list===[]){
           return<div>Total 0 Calories of Food</div>
       }
       else{
       console.log(this.state.list)
       const total=this.state.list.reduce((totl,value)=>{return totl+value[1]},0)
       console.log(total)
       return(
       <div className="cal"><b>Total {total} calories of Food</b>
           {this.state.list.map((val,index)=>{return(
               <div className="list">
               <div>{index+1}.{val[0]}={val[1]}</div>
               <button onClick={()=>this.exiting(val)}>x</button>   
               </div>
           )})}
        </div>
       )
       }
       
   }
   exiting=(value)=>{       //when you click the exit button on each item in the outputbox that item will get removed in the output box
       console.log(value[0])
       new_list=this.state.list.filter((val)=>{
           if(val[0]!==value[0]){
                return val;
           }
       })
       this.setState({list:new_list})
   }
   render(){
       console.log(this.state)
       return(<div className="section2">
           <div className="section">
           {this.show()}
           </div>
           {this.nextsection()}
           </div>);
   }
}
export default Display