import React from 'react';
import '../css/portfolio.scss';

class Portfolio extends React.Component{
  constructor(){
    super();
    this.checkTop = this.checkTop.bind(this)
    this.portScroll = this.portScroll.bind(this)
  }
  checked = (who) =>{
     document.getElementById(who).checked =! document.getElementById(who).checked;
  }
  componentDidMount(){
    document.addEventListener('scroll', this.portScroll)
  }
  portScroll(){
    var e = document.getElementById('portfolio').children
      for (var i = 0; i < e.length; i++) {
        var windowScroll = window.scrollY;
        var height = (window.innerWidth >= 760)?(e[i].offsetHeight * i)/3.5
        :e[i].offsetHeight * i
        this.checkTop(e[i], windowScroll, height);
      }
  }
  checkTop =(element, windowScroll, height) =>{
    let skillHeight = document.getElementById('Skill').offsetHeight
    let portfolio = skillHeight + window.innerHeight - (element.offsetHeight * 1.5);

    if(windowScroll >= (portfolio + height) ){
      element.style.opacity= 1;
      element.style.transform= "translate(0%)";
    }
    else{
      element.style.opacity= 0;
      element.style.transform= "translate(200%)";
    }
  }
  render(){
    return(
      <div id="portfolio" className="portfolio">

        <div className="flipBtnWrapper">
          <input id="wiki" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("wiki")} className="backWiki">
                <p>SVG image</p>
                <p>jQuery Ajax calls</p>
                <p>css animations</p>
                <h2>Link: <a href="https://codepen.io/DReflex/full/bgWxLy/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="wikipedia">
                <div onClick={()=>this.checked("wiki")} className="wiki-heading">
                  <h1>Wikipedia API Search</h1>
                  <img alt="##_" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="night" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("night")} className="backWiki">
                <p>Full Stack App</p>
                <p>Google Place API</p>
                <p>Custom REST API</p>
                <p>Social Media Login</p>
                <h2>Link: <a href="https://iiinightlifeiii.herokuapp.com/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="nightlife">
                <div onClick={()=>this.checked("night")} className="night-heading">
                  <h1>Night Life App</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="simon" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("simon")} className="backWiki">
                <p>CSS Image</p>
                <p>jQuery, JavaScript</p>
                <h2>Link: <a href="https://codepen.io/DReflex/full/qrBGOZ/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="simonGame">
                <div onClick={()=>this.checked("simon")} className="night-heading">
                  <h1>Simon Game</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="pin" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("pin")} className="backWiki">
                <p>REST API</p>
                <p>Masonry.js</p>
                <p>Social Media Login</p>
                <h2>Link: <a href="https://fcc-last.herokuapp.com/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="pinterest">
                <div onClick={()=>this.checked("pin")} className="night-heading">
                  <h1>Pinterest</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="clock" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("clock")} className="backWiki">
                <p>CSS Image</p>
                <p>Simplicity</p>
                <p>JavaScritp</p>
                <h2>Link: <a href="https://codepen.io/DReflex/full/egxQav/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="pomodoro">
                <div onClick={()=>this.checked("clock")} className="night-heading">
                  <h1>Pomodoro Clock</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="book" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("book")} className="backWiki">
                <p>Socket.io - Comments</p>
                <p>Google books API</p>
                <h2>Link: <a href="https://book-ish-club.herokuapp.com/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="bookClub">
                <div onClick={()=>this.checked("book")} className="night-heading">
                  <h1>Book Club</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="calculator" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("calculator")} className="backWiki">
                <p>JavaScritp</p>
                <p>CSS Image</p>
                <h2>Link: <a href="https://codepen.io/DReflex/full/xgBXGB/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="calculator">
                <div onClick={()=>this.checked("calculator")} className="night-heading">
                  <h1>JavaScript Calculator</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="voting" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("voting")} className="backWiki">
                <p>Chart2.js</p>
                <p>React</p>
                <h2>Link: <a href="https://fierce-chamber-91384.herokuapp.com/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="voting">
                <div onClick={()=>this.checked("voting")} className="night-heading">
                  <h1>Voting App</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="tic-tac" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("tic-tac")} className="backWiki">
                <p>Working Min-Max AI</p>
                <p>JavaScript</p>
                <h2>Link: <a href="https://codepen.io/DReflex/full/ZezqWY/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="tic-tac">
                <div onClick={()=>this.checked("tic-tac")} className="night-heading">
                  <h1>Tic Tac Toe</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flipBtnWrapper">
          <input id="Chart" type="checkbox"/>
          <div className="flipBtn front">
            <div className="flipBtn_face flipBtn_back">
              <div onClick={()=>this.checked("Chart")} className="backWiki">
                <p>Socket.io</p>
                <p>Highcarts.js</p>
                <p>Powered by www.quandl.com</p>
                <h2>Link: <a href="https://stock-market-op.herokuapp.com/" target="_blank">Demo</a></h2>
              </div>
            </div>
            <div className="flipBtn_face flipBtn_mid"></div>
            <div className="flipBtn_face flipBtn_front">
              <div className="Chart">
                <div onClick={()=>this.checked("Chart")} className="night-heading">
                  <h1>Chart the Stock Market</h1>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    )
  }
}
export default Portfolio
