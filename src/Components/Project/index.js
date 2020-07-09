import React from 'react'
import './style.scss'



class Project extends React.Component{
    render(){
     const {key, repo} = this.props
        return(
        <li className='list'> {repo.name}</li>

        )
    }
}

export default Project 