import React, { Component } from 'react'
import './App.css';


export class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       val:'',
       color:'light',
       theme:'light'
    }
  }
  clickHandler=(event)=>{
    this.state.val=event.target.value
    if(this.state.val==='light'){
      this.setState({
        color:'dark'
      })     
      this.setState({
        theme:'dark'
      })
    }
    if(this.state.val==='dark'){
      this.setState({
        color:'light'
      })     
      this.setState({
        theme:'light'
      })
    }
  }
  render() {
    return (
      <div className='App' id={this.state.color}>
        <button onClick={this.clickHandler} value={this.state.theme}>{this.state.theme}</button>
        <h1>set Theme</h1>
        <p>loremshdasguds hdshdsd igushudsadk reate a dark mode with following points
Default white background with black text
on change black background with white text
Can use a single button for same whose text will change to "Dark Mode" and "Light Mode" accordingly</p>
      </div>
    )
  }
}

export default App