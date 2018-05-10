import React,  {Component} from 'react';
import '../_css/Home.css';
import { Link } from 'react-router-dom';
import { Weather } from './Weather';
import { Todo } from './Todo';
import { quoteService } from '../_services/quote.service';

var Nav = require('../_components/Nav');
var TopBar = require('../_components/TopBar');
// var Weather = require('../_components/Weather');
// var Todo = require('../_components/Todo');


class Home extends React.Component {
      constructor(props){
        super(props);
        this.state={
          quote:{}
        }
        const quote = quoteService.getToQ().then(
          resp => this.setState({
            quote: resp
          })
        )
      }

      componentDidMount(){
        if(this.state.quote.success){

        }
      }

      componentWillUpdate(){
        if(this.state.quote.success){
          var randomId = new Date().getTime();
          console.log(this.state.quote.contents.quotes[0])
          const background = this.state.quote.contents.quotes[0].background
          document.getElementById('QuoteBKG').style.backgroundImage = 'url(' + this.state.quote.contents.quotes[0].background + '?random=' + randomId + ')';

          console.log(background);
        }
      }

      render() {
        const {user, users} = this.props;
        var randomId = new Date().getTime();
        let style = {}
        if(this.state.quote.success){
          let style = {
            backgroungImage: 'url(' + this.state.quote.contents.quotes[0].background + '?random=' + randomId + ')'
          }
        }
        return (
            <div className=" content-container smMargT">
                <div className="welcome-area">
                  <h1 className="welcome ">WELCOME ON DASHBOARD</h1>
                  <img className="welcome-icon" src={require('../_assets/Icons/pin.png')}></img>
                </div>
                <div className="">
                  <div className="weather white">
                    <Weather />
                  </div>
                  <div className="col-6 white">
                      <Todo name={user}/>
                  </div>
                  <div className="col-6 white ">
                    <h3 className="quote-title">Inspiring Quote of the day:</h3>
                    <div id="QuoteBKG" style={style} className="other backg2">
                      {this.state.quote.contents    && <h3 className="quote">{this.state.quote.contents.quotes[0].quote}</h3>}
                      {this.state.quote.contents    && <h3 className="quote author">--{this.state.quote.contents.quotes[0].author}</h3>}
                    </div>
                  </div>
                </div>
            </div>

        )
      }
}

module.exports = Home;
//
//
// <div className="shotcut white">
// <div className="template1">Shotcut area</div>
//
// </div>
