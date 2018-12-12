import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./header"
import Footer from "./footer"
import './css/tailwind.css';

const App = () => {
    return  <div class = "page-wrapper">
                <div class = "page-content">
                    <Header/>
                    <div class= "content-wrapper">
                        <Hello/> 
                    </div>    
                    <Footer/>
                </div> 
            </div>     
};

ReactDOM.render(<App/>, document.getElementById("app"))