import React from 'react';
import logo from 'assets/images/logo.png'
export class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Welcome to React Template</h1>
            <img src={logo}/>
            </div>
        )
    }
}
export default App