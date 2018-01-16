import React from 'react';
import Welcome from './welcome';
import Skill from './Skill';
import Contact from './Contact'
import '../css/grid.scss';

class Home extends React.Component{
  render(){
    return(
      <div id="content">
        <Welcome />
        <div className="main">
          <Skill />
        </div>
          <Contact />

      </div>
    )
  }
}
export default Home
