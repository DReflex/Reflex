import React from 'react';
import smoothScroll from 'smoothscroll'
import '../css/scroll.scss'
class Scroll extends React.Component{
  scrollTo = () =>{
    smoothScroll(window.innerHeight, 1000)
  }
  render(){
    return(
      <div onClick={this.scrollTo} className="scroll">
        <span className="outline">
        <span className="dot"></span>
        </span>
      </div>
    )
  }
}
export default Scroll
