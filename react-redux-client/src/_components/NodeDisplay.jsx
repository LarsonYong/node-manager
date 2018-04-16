import React,  {Component} from 'react';
import '../_css/NodeDisplay.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import { Table } from 'react-bootstrap';

import { nodeActions } from '../_actions';
import { userService } from '../_services';

var NodeCard = require('./NodeCard');
var NodeDetialCard = require('./NodeDetialCard');

class NodeDisplay extends React.Component {
  constructor(props){
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
    this.cancleDetailCard = this.cancleDetailCard.bind(this);
    this.State = {
      selectedNode: ''
    };
  }

  componentDidMount() {
    userService.verifyToken1();
    this.props.dispatch(nodeActions.getAll());
  }


  onItemClick(data) {
    const targett = document.getElementById(data);
    const children = targett.children[0].children;
    const CardLeft = children[0];
    const CardRight=children[1];
    const CardLeftH2 = CardLeft.children[0];
    targett.classList.remove('card');
    targett.classList.add('card-detail')
    CardLeft.classList.remove('card-body-left');
    CardLeft.classList.add('card-detail-body-left');
    CardLeftH2.classList.add('detail-left-h2')
    CardRight.classList.remove('card-body-right');
    CardRight.classList.add('card-detail-body-right');
    CardRight.children[0].style.display = "none";
    CardRight.children[1].style.display = "none";
    CardRight.children[2].style.display = "none";
    CardRight.children[3].style.display = "block";
    this.setState({
      selectedNode: data
    })
  }

  cancleDetailCard(data){
    this.setState({
      selectedNode: ''
    });
    const targett = document.getElementById(data);
    const children = targett.children[0].children;
    const CardLeft = children[0];
    const CardRight=children[1];
    const CardLeftH2 = CardLeft.children[0];
    targett.classList.add('card');
    targett.classList.remove('card-detail')
    CardLeft.classList.add('card-body-left');
    CardLeft.classList.remove('card-detail-body-left');
    CardLeftH2.classList.remove('detail-left-h2')
    CardRight.classList.remove('card-detail-body-right');
    CardRight.classList.add('card-body-right');
    CardRight.children[0].style.display = "block";
    CardRight.children[1].style.display = "block";
    CardRight.children[2].style.display = "block";
    CardRight.children[3].style.display = "none";
  }

  render () {
    const { nodes } = this.props;
    return (
      <div className="content-container marr margT">
          <div id="card-area" className="card-area clearfix">
          {nodes.loading &&<em>Loading nodes...</em>}
          {nodes.error && <span className="text-danger">ERROR: {nodes.error}</span>}
          {nodes.items && <div>{nodes.items.map((node, index) => (

            <div id={node.UnitID} tabIndex={node.UnitID} ref={node.UnitID} key={index} onClick={() => this.onItemClick(node.UnitID)} onBlur={() => this.cancleDetailCard(node.UnitID)}  className='card'>
             <div className='card-body clearfix'>
               <div  className={"card-body-left " + node.Hardware.Platform } >
                 <h2> {node.Hardware.Platform} </h2>
               </div>
               <div className="card-body-right">
                 <h2> {node.UnitID}</h2>
                 <p> {node.Software.IP_address}</p>
                 <p> {node.Software.PrimaryInterface}</p>
                 <div className="DetailComponent"><NodeDetialCard {...this.state} node={node}/></div>
               </div>
             </div>
            </div>
          ))}</div>}
          </div>
      </div>
        )
      }
}





function mapStateToProps(state) {
    const { nodes } = state;
    return {
        nodes: state.nodes
    };
}

const connectedNodeDisplay = connect(mapStateToProps)(NodeDisplay);
export { connectedNodeDisplay as NodeDisplay };
