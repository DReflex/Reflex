import React from 'react'
import SwitchCard from './switchCard'
import '../css/Contact.scss'
class Contact extends React.Component{
  render(){
    return(
      <div id="contact" className="contact">
        <img className="profile-img" src="https://foundr.com/wp-content/uploads/2018/01/gary.png" alt="#" />
        <SwitchCard />
      </div>
    )
  }
}
export default Contact
