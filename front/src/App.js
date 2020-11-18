import React,{Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Nav from './components/Home/Nav';
import Header from './components/Home/Header';
import Signup from "./components/signup"
import Signuporg from "./components/signuporg"
import Event from "./components/Home/event/event"
import Login from './components/LogIn';
import About from './components/about';
import Footer from './components/Home/Footer';


class App extends Component {
  state = {
    belal:{name:"belal",age:"2555"}
  } 

  render(){
    return (
      <div className="App">
        <div> 
        <BrowserRouter>
          <Nav />
          <Switch>
          <Route exact path={"/"}  render={ () => ( <Header belal={this.state.belal} /> )  }/>
          <Route exact path={"/login"}  render={ () => ( <Login  /> )  }/>
          <Route exact path={"/event"}  render={ () => ( <Event  /> )  }/>
          <Route exact path={"/signup"}  render={ () => ( <Signup  /> )  }/>
          <Route exact path={"/signuporg"}  render={ () => ( <Signuporg  /> )}/>
          <Route exact path={"/signuporg"}  render={ () => ( <About  /> )}/>

      
        </Switch>
        <Footer />
                
        </BrowserRouter>
          </div>
  
        </div> 
    )
  }

  
}

  
export default App;