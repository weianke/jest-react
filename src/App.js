import React, { Component } from 'react'
import Test from './test';
export default class App extends Component {

  handleRef = (ref) => {
    this.testRef = ref;
  }

  click = () => {
    console.log(this.testRef)
    this.testRef.test(() => {
      alert('1213')
    });
  }



  render() {
    return (
      <div>
        <button onClick={this.click} >获取</button>
        <Test ref={this.handleRef}></Test>
      </div>
    )
  }
}