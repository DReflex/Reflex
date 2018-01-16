import React from 'react';
import Scroll from './scroll'
import Text from './text'
import '../css/grid.scss';
import '../css/stars.scss'

class Welcome extends React.Component{
  render(){
    let height = window.innerHeight
    return(
      <div style={{height:height}} id="welcome">
        <div className="stars">
          <div className="stars1"></div>
          <div className="stars2"></div>
          <Scroll />
          <Text />
        </div>
      </div>
    )
  }
}
export default Welcome
//
