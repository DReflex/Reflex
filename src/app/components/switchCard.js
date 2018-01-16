import React from 'react';
import { connect } from 'react-redux'
import * as query from '../../actions/index'
import '../css/switchCard.scss';

class SwitchCard extends React.Component{
  componentDidMount(){
    this.props.dispatch(query.queryReset())
  }
  switch = (type) =>{
    var moreInfo = document.getElementById('moreInfo')
    var eMail = document.getElementById('eMail')
    if(type == "log-in"){
      moreInfo.classList.add("active-dx");
      eMail.classList.add("inactive-sx");
      eMail.classList.remove("active-sx");
      moreInfo.classList.remove("inactive-dx");
    }else{
      eMail.classList.add("active-sx");
      moreInfo.classList.add("inactive-dx");
      moreInfo.classList.remove("active-dx");
      eMail.classList.remove("inactive-sx");
    }

  }
  handleChange =(e,type)=>{
    let value = e.target.value
    this.props.dispatch(query.error(false))
    switch(type){
      case "from":
      return this.props.dispatch(query.queryFrom(value))
      case "subject":
      return this.props.dispatch(query.querySubject(value))
      case "text":
      return this.props.dispatch(query.queryText(value))
      default:
      return console.log("error")
    }
    this.props.dispatch(query.queryReset())
  }
  handleSend = () =>{
    if(this.props.form.from == false || this.props.form.subject == false || this.props.form.text == false){
      this.props.dispatch(query.error(true))
    }else{
      let form = this.props.form
      console.log("sending");
      fetch('/api/mail',{
        method: 'POST',
        mode: "CORS",
        body: JSON.stringify({
          from: form.from,
          subject: form.subject,
          text: form.text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      this.props.dispatch(query.queryReset())
    }

  }
  render(){
    let form = this.props.form;
    let error = this.props.state.error? '3px solid rgb(159, 0, 43)': "none"
    return(
      <div className="box">
        	<div id="eMail" className="box1 eMail">
        		<div className="head">
              <h1> CONTACT ME!</h1>
        		</div>
            <div className="lineContainer">
              <input style={{border: error}} onChange={(e)=>this.handleChange(e, "from")} value={form.from} placeholder="Your Mail" type="text"/>
            </div>
            <div className="lineContainer">
              <input style={{border: error}} onChange={(e)=>this.handleChange(e, "subject")} value={form.subject} placeholder="Subject" type="text"/>
            </div>
            <div className="lineContainer">
              <textarea style={{border: error}} onChange={(e)=>this.handleChange(e, "text")} value={form.text} placeholder="Meassage" type="text"/>
            </div>

            <div className="buttons">
              <button onClick={this.handleSend} className="send" type="button">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>

                </button>
              <button className="contact" onClick={() => this.switch('log-in')}  type="button">Information</button>
            </div>
        	</div>
        	<div id="moreInfo" className="box1 moreInfo">
            <div className="head">
              <h1>MORE INFO</h1>
        		</div>
            <div className="lineContainer">
              <label htmlFor="code">Code:</label>
              <ul name="code">
                <li><a href="https://codepen.io/DReflex/" target="_blank">CodePen</a></li>
                <li><a href="https://github.com/DReflex" target="_blank">GitHub</a></li>
              </ul>
            </div>
            <div className="lineContainer">
              <label htmlFor="cert">Certificates:</label>
              <ul name="cert">
                <li><a href="https://www.freecodecamp.org/dreflex/front-end-certification" target="_blank">Front End</a></li>
                  <li><a href="https://www.freecodecamp.org/dreflex/back-end-certification" target="_blank">Back End</a></li>
              </ul>
            </div>
            <div className="buttons">
              <button onClick={() => this.switch('out')} type="button">Contact</button>
            </div>
        	</div>
        </div>
    )
  }
}
const store = (store) =>{
  return{
    form:store.form,
    state: store.State
  }
}
SwitchCard = connect(store)(SwitchCard)

export default SwitchCard
