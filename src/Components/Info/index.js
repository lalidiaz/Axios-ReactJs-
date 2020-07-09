import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


class Info extends React.Component {
    render() {
        
        return (
            <div className="projectsGithub">
            <p className='bio'><strong><FontAwesomeIcon icon={faUser} />  Biography:</strong> {this.props.bio}</p>
            <img className='avatarimg' src={this.props.profilePic} />
            </div >

        )
    }
}

export default Info 