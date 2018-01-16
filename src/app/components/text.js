import React from 'react';
import '../css/text.scss'
class Text extends React.Component{
  render(){
    return(
      <div className="text">
        <div className="text-container">
          <span>Front end</span><br />
          <span>Web Developer</span>
        </div>

      </div>
    )
  }
}
export default Text
