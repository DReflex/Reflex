import React from 'react'
import SkillList from './skillList'
import Portfolio from './portfolio'

class Skill extends React.Component{
  render(){
    return(
      <div>
        <SkillList />
          <div id="portfolio">
            <Portfolio />
          </div>

      </div>
    )
  }
}
export default Skill
