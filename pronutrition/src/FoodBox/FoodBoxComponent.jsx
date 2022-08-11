import React from 'react';
import Search from '../SearchBox/Searchbox';

class Foodbox extends React.Component{ // This Component Hold the details of foods
      constructor(){
          super();
          this.state={details:[{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74-p3oWpuQhrHdHB20x-eIRy9ksOpkWlMsw&usqp=CAU",name:"Apple",cal:80},
                               {image:"https://www.telegraph.co.uk/multimedia/archive/01834/orange_1834038b.jpg",name:"Orange",cal:90},
                               {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi94BSgqwm6Zzv7mx3DJWxYRWNUPC0gf3pOA&usqp=CAU",name:"Banana",cal:100},
                               {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F4wQ9Ezf5Y8VGhTDGVRRw8cYZJyRuANBpw&usqp=CAU",name:"Grapes",cal:50},
                               {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMW7OiCvEfO7mYou3iV4q3yZPgSGTnacnKw&usqp=CAU",name:"Dates",cal:150}]}
      }
      render(){
          return <Search details={this.state.details}/> //passing the details of food to search box component as props
      }  
}
export default Foodbox 