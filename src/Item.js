import React, { Component } from 'react'
 
// Function Component
const Item = (props) => {
  return(
  <ul>
    <li>
      Item: {props.name}
    </li>
  </ul>
  )
}

// Function Component
/* function MyComponent (props) {
  return(<div>My name is {props.name}</div>)
} */

// Class Component
/* class MyComponent extends Component {
 render(){
 return (<div>My name is {this.props.name}</div>)
 }
} */
 
export default Item