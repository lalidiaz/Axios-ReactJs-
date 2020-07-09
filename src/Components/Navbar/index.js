import React from 'react'
import './style.scss'


class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <h3 className="name">{this.props.name}</h3>
                
            </nav>

        )
    }
}

export default Navbar 