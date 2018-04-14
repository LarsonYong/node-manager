import React,  {Component} from 'react';
import '../_css/NodeDisplay.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom'
import { Table } from 'react-bootstrap';

import { nodeActions } from '../_actions';
import { userService } from '../_services';

var NodeCard = require('./NodeCard')

class NodeDisplay extends React.Component {
  constructor(props){
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
    this.cancleDetailCard = this.cancleDetailCard.bind(this);
  }

  componentDidMount() {
    userService.verifyToken1();
    this.props.dispatch(nodeActions.getAll());
  }


  onItemClick(data) {
    const targett = document.getElementById(data);
    const children = targett.children[0].children;
    const CardLeft = children[0];
    const CardLeftH2 = CardLeft.children[0];
    targett.classList.remove('card');
    // if (targett.classList.contains('card')){
    //
    // }else {
    //   targett.classList.add('card');
    // }
    targett.classList.add('card-detail')
    CardLeft.classList.remove('card-body-left');
    CardLeft.classList.add('card-detail-body-left');
    CardLeftH2.classList.add('detail-left-h2')
  }

  cancleDetailCard(data, e){
    console.log("222")
    console.log(e.currentTarget);
    const targett = document.getElementById(data);
    const children = targett.children[0].children;
    const CardLeft = children[0];
    const CardLeftH2 = CardLeft.children[0];
    targett.classList.add('card');
    targett.classList.remove('card-detail')
    CardLeft.classList.add('card-body-left');
    CardLeft.classList.remove('card-detail-body-left');
    CardLeftH2.classList.remove('detail-left-h2')
  }

  render () {
    const { nodes } = this.props;
    return (
      <div className="content-container marr margT">
          <div className="card-area">
          {nodes.loading &&<em>Loading nodes...</em>}
          {nodes.error && <span className="text-danger">ERROR: {nodes.error}</span>}
          {nodes.items && <div>{nodes.items.map((node, index) => (

            <div id={node.UnitID} tabindex={node.UnitID} ref={node.UnitID} key={index} onClick={(e) => {this.onItemClick(node.UnitID)}}  onBlur={(e) => {this.cancleDetailCard(node.UnitID,e)}} className='card'>
             <div className='card-body clearfix'>
               <div  className={"card-body-left " + node.Hardware.Platform } >
                 <h2> {node.Hardware.Platform} </h2>
               </div>
               <div className="card-body-right">
                 <h2> {node.UnitID}</h2>
                 <p> {node.Software.IP_address}</p>
                 <p> {node.Software.PrimaryInterface}</p>
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
