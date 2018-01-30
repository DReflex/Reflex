import React from 'react'
import SkillList from './skillList'
import Portfolio from './portfolio'

class Skill extends React.Component{
  render(){
    return(
      <div>
        <SkillList />
        <Portfolio />
      </div>
    )
  }
}
export default Skill
