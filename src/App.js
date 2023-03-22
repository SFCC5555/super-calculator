import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Screen } from './components/Screen.js';
import { Button } from './components/Button.js';
//import { useState } from 'react';
import { operation } from './operation';

/*function App() {

  let [screenContent,setScreenContent]=useState('')
  
  function action(c) {
    if (c==='CLEAR') {
      setScreenContent('')
    } else if (screenContent==='SYNTAX ERROR' || screenContent==='MATH ERROR') {
      
      if(c==='=') {
        setScreenContent('')
      } else {
        setScreenContent(c)
      }
      

    } else if (screenContent.length>12) {
        alert('out of range')
        setScreenContent('')

    }else if (/[^\=]/.test(c)){
      setScreenContent(screenContent + c)
    } else {
      let result = operation(screenContent)

      setScreenContent(result)
  
    }

  }
    
  return (
    <React.Fragment>

      <h1>Super Calculator! <span className='fireLogo'></span></h1>

      <section className='calculator'>
        <Screen content={screenContent}/>
        <section className='buttonSection'>
          <Button functionality={action} name={7}/>
          <Button functionality={action} name={8}/>
          <Button functionality={action} name={9}/>
          <Button functionality={action} name='x' color='grey'/>
          <Button functionality={action} name={4}/>
          <Button functionality={action} name={5}/>
          <Button functionality={action} name={6}/>
          <Button functionality={action} name='%' color='grey'/>
          <Button functionality={action} name={1}/>
          <Button functionality={action} name={2}/>
          <Button functionality={action} name={3}/>
          <Button functionality={action} name='+' color='grey'/>
          <Button functionality={action} name={0}/>
          <Button functionality={action} name='.' color='grey'/>
          <Button functionality={action} name='=' color='grey'/>
          <Button functionality={action} name='-' color='grey'/>

        </section>
        <Button functionality={action} name='CLEAR' type='largeButton' color='crimson'/>

      </section>

      <div className="react">
        <p>Powered by React.</p>
        <img src={logo} className="reactLogo" alt="logo" />
      </div>

    </React.Fragment>

  );
}*/

class App extends React.Component {
  constructor(props) {
  super(props)


  this.state = {screenContent:''}


  this.action = this.action.bind(this)

  }

  action(c) {

    const sC = this.state.screenContent


    if (c==='CLEAR') {
      this.setState({screenContent:''})
    } else if (sC==='SYNTAX ERROR' || sC==='MATH ERROR') {
      
      if(c==='=') {
        this.setState({screenContent:''})
      } else {
        this.setState({screenContent:c})
      }
      


    } else if (sC.length>12) {
        alert('out of range')
        this.setState({screenContent:''})

    }else if (/[^\=]/.test(c)){
      this.setState(state=>({screenContent:state.screenContent+c}))
    } else {
      let result = operation(sC)

      this.setState({screenContent:result})
  
    }

  }

  render() {

    const sC = this.state.screenContent
  
    return (
      <React.Fragment>
  
        <h1>Super Calculator! <span className='fireLogo'></span></h1>
  
        <section className='calculator'>
          <Screen content={sC}/>
          <section className='buttonSection'>
            <Button functionality={this.action} name={7}/>
            <Button functionality={this.action} name={8}/>
            <Button functionality={this.action} name={9}/>
            <Button functionality={this.action} name='x' color='grey'/>
            <Button functionality={this.action} name={4}/>
            <Button functionality={this.action} name={5}/>
            <Button functionality={this.action} name={6}/>
            <Button functionality={this.action} name='%' color='grey'/>
            <Button functionality={this.action} name={1}/>
            <Button functionality={this.action} name={2}/>
            <Button functionality={this.action} name={3}/>
            <Button functionality={this.action} name='+' color='grey'/>
            <Button functionality={this.action} name={0}/>
            <Button functionality={this.action} name='.' color='grey'/>
            <Button functionality={this.action} name='=' color='grey'/>
            <Button functionality={this.action} name='-' color='grey'/>
  
          </section>
          <Button functionality={this.action} name='CLEAR' type='largeButton' color='crimson'/>
  
        </section>
  
        <div className="react">
          <p>Powered by React.</p>
          <img src={logo} className="reactLogo" alt="logo" />
        </div>
  
      </React.Fragment>
  
    );

  }

}



export default App;
