import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import About from "./About"
import Projects from "./Projects"
import Hello from "./Hello"
import Header from "./header"
import Footer from "./footer"
import './css/tailwind.css';

const App = () => {
    return  <div class = "page-wrapper">
                <div class = "page-content">
                    <Header/>
                    <div class= "content-wrapper">
                        <Switch>
                            <Route exact path='/' component={Hello}></Route>
                            <Route exact path='/' component={About}></Route>
                            <Route exact path='/' component={Projects}></Route>
                        </Switch>
                    </div>    
                    <Footer/>
                </div> 
            </div>     
};

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));