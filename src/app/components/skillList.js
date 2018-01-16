import React from 'react';
import '../css/skillGrid.scss';

class SkillList extends React.Component{
  constructor(){
    super();
    this.checkTop = this.checkTop.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll)
  }
  handleScroll(){
    var e = document.getElementById('Skill').children
      for (var i = 0; i < e.length; i++) {
        var windowScroll = window.scrollY;
        this.checkTop(e[i], windowScroll);
      }
  }
  checkTop =(element, windowScroll) =>{
    var rect = element.getBoundingClientRect().top;
    var top = element.scrollTop;
    // console.log("height", (rect + top) );
    var left = document.getElementById("left")
    if(rect + top <= windowScroll){
      element.style.opacity= 1;
      element.style.transform= "translate(0%)";
    }
    else{
      element.style.opacity= 0;
      element.style.transform= "translate(100%)";
    }
  }
  render(){
    return(
      <div id="Skill" className="Skill">

        <div className="slider">
          <input type="checkbox" />
          <img className="arrow" alt="arrow" src="https://image.flaticon.com/icons/png/512/275/275114.png" />
          <div className="layer1">
            <img className="skillImage" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="#_#" />
            <img className="skillImage" src="http://w3widgets.com/responsive-slider/img/css3.png" alt="#_#" />
            <img className="skillImage" src="https://fiu-assets-2-syitaetz61hl2sa.stackpathdns.com/static/use-media-items/17/16215/full-1052x1052/56702c8b/js.png?resolution=0" alt="#_#" />
            <img className="skillImage" src="https://www.eleven2.com/img-2015/bootstraplogo.png" alt="#_#" />
            <img className="skillImage" src="https://www.blogvisa.com/developers/img/jquery-logo.png" alt="#_#" />
          </div>
          <div className="layer2">
            <h1 >Core skills</h1>

            <div id="direction" className="direction">
              <div id="left" className="left">
                <img className="logo" src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fthumbnails%2Fresponsive-for-modern-monitors-group-symbol.svg?1515685492538" alt="no" />
              </div>
              <div id="right" className="right">
                <p>Good Understandong of the Web</p>
                <p>Mobile First Design</p>
              </div>
            </div>

          </div>
        </div>

        <div className="slider">
          <input type="checkbox" />
          <img className="arrow" alt="arrow" src="https://image.flaticon.com/icons/png/512/275/275114.png" />
          <div className="layer1">
            <img className="skillImage" src="https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png" alt="#_#" />
            <img className="skillImage" src="https://npm.taobao.org/mirrors/node/v0.10.40/docs/api/assets/logo.svg" alt="#_#" />
            <img className="skillImage" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png" alt="#_#" />
            <img className="skillImage" src="https://cdn.worldvectorlogo.com/logos/socket-io.svg" alt="#_#" />
          </div>
          <div className="layer2">
            <h1 >Back End</h1>

            <div id="direction" className="direction">
              <div id="left" className="left">
                <img className="logo" src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fhosting.svg?1515687640756" alt="no" />
              </div>
              <div id="right" className="right">
                <p>Working and Developing API's</p>
                <p>Full Stack JavaScript</p>
              </div>
            </div>

          </div>
        </div>
        <div className="slider">
          <input type="checkbox" />
          <img className="arrow" alt="arrow" src="https://image.flaticon.com/icons/png/512/275/275114.png" />
          <div className="layer1">
            <img className="skillImage" src="http://www.reactrally.com/assets/dist/img/ReactLogo.svg" alt="#_#" />
            <img className="skillImage" src="http://devstickers.com/assets/img/pro/h8ci.png" alt="#_#" />
            <img className="skillImage" src="https://cdn.worldvectorlogo.com/logos/webpack-icon.svg" alt="#_#" />
          </div>
          <div className="layer2">
            <h1 >Framework</h1>

            <div id="direction" className="direction">
              <div id="left" className="left">
                <img className="logo" src="http://www.reactrally.com/assets/dist/img/ReactLogo.svg" alt="no" />
              </div>
              <div id="right" className="right">
                <p>Simplicity</p>
                <p>Modularity</p>
                <p>Clean Code</p>
              </div>
            </div>

          </div>
        </div>
        <div className="slider">
          <input type="checkbox" />
          <img className="arrow" alt="arrow" src="https://image.flaticon.com/icons/png/512/275/275114.png" />
          <div className="layer1">
            <img className="skillImage" src="http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png" alt="#_#" />
            <img className="skillImage" src="https://www.gimp.org/images/frontpage/wilber-big.png" alt="#_#" />
            <img className="skillImage" src="http://ignatiuz.com/wp-content/uploads/2016/06/Inkscape_01.png" alt="#_#" />
            <img className="skillImage" src="https://wordpress.highcharts.com/blog/wp-content/uploads/2017/08/28160952/highcharts_logo.png" alt="#_#" />

          </div>
          <div className="layer2">
            <h1 >Design</h1>

            <div id="direction" className="direction">
              <div id="left" className="left">
                <img className="logo" src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fthumbnails%2Fartist.svg?1515687825833" alt="no" />
              </div>
              <div id="right" className="right">
                <p>Pixel Perfect</p>
                <p>Creative</p>
              </div>
            </div>

          </div>
        </div>
        <div className="slider">
          <input type="checkbox" />
          <img className="arrow" alt="arrow" src="https://image.flaticon.com/icons/png/512/275/275114.png" />
          <div className="layer1">
            <img className="skillImage" src="https://www.curvve.com/wp-content/uploads/Terminal-Logo-300x300.png" alt="#_#" />
            <img className="skillImage" src="https://mlab.com/company/brand/img/downloads/mLab-logo-ondark.png" alt="#_#" />
            <img className="skillImage" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" alt="#_#" />
            <img className="skillImage" src="https://cdn.worldvectorlogo.com/logos/heroku.svg" alt="#_#" />

          </div>
          <div className="layer2">
            <h1 >Development</h1>

            <div id="direction" className="direction">
              <div id="left" className="left">
                <img className="logo" src="https://cdn.glitch.com/81770a35-1790-4efa-8f7a-c06945d590c2%2Fthumbnails%2Ficon.svg?1515687934750" alt="no" />
              </div>
              <div id="right" className="right">
                <p>Linux Development</p>
                <p>Open Source</p>
                <p>Cloud Hosting</p>
              </div>
            </div>

          </div>
        </div>


      </div>
    )
  }
}
export default SkillList
