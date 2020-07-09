import React from 'react'
import './style.scss'
import Project from '../Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

class Projects extends React.Component {
    render() {
        const { repos } = this.props
        return (
            <React.Fragment>
                <p className='projects'><FontAwesomeIcon icon={faTasks} />   Projects</p>

                <ul>
                    {repos.map((repo, key) => {
                        return (
                            <Project key={key} repo={repo} />
                        )
                    })}
                </ul>
            </React.Fragment>


        )
    }
}

export default Projects 