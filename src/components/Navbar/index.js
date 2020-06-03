import React from 'react';
import Button from 'components/Button'
import PropTypes from 'prop-types';
import './style.scss';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <nav className="navbar is-transparent" role="naviagtion">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img className="navbar-img" src={this.props.logo} alt={this.props.logoAlt}/>
                            </a>
                        </div>
                        <div className="navbar-menu">
                            <div className="navbar-start"></div>
                            <div className="navbar-end">
                                <Button className="is-primary is-navbar is-outlined is-rounded" text={this.props.menuItem} onClick={this.props.textClick}></Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}
Navbar.defaultProps={
    logo:undefined,
    alt:"BRAND",
    menuItem:"menu1"
}
Navbar.propTypes={
    logo:PropTypes.node,
    alt:PropTypes.string.isRequired,
    menuItem:PropTypes.string
}
export default Navbar