import React from 'react';
import logo from 'assets/images/logo.png'
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import { faHome } from "@fortawesome/free-solid-svg-icons";
export class App extends React.Component{
    textClick(){
        console.log("reached")
    }
    render(){
        return(
            <div>
                <Navbar logo={logo} logoAlt="KRS" menuItem="Contact Me" textClick={this.textClick.bind(this)}/>
                <h1>Welcome to React Template</h1>
                <Button className="is-primary is-small is-outlined is-rounded" text="hello" icon={faHome}/>
            </div>
        )
    }
}
export default App