import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Info from './Components/Info'
import Projects from './Components/Projects'
import axios from 'axios'



class App extends React.Component {
constructor(props){
  super(props)

  this.state={
    name: "",
    bio: "",
    profilePic:"",
    repos: [],
  }
}

async componentDidMount(){
  const github = await axios('https://api.github.com/users/lalidiaz')
  console.log(github)
  const repos = await axios('https://api.github.com/users/lalidiaz/repos')

  const {name, bio, avatar_url} = github.data

this.setState({
  name: name,
  bio: bio,
  profilePic: avatar_url,
  repos:repos.data
})
}


  render(){
    const {name, profilePic, bio, repos} = this.state
    return (
      <React.Fragment>
        <Navbar name={name}/>
        <Info profilePic={profilePic} bio={bio} />
        <Projects repos={repos} />
      </React.Fragment>
    );
  }
  }
  

export default App;
