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
  }

  componentDidMount() {
    userService.verifyToken1();
    this.props.dispatch(nodeActions.getAll());
  }



  onItemClick(data) {

    console.log(this.refs);
    const array = this.refs.data
    console.log(array)

  }

  render () {
    const { nodes } = this.props;
    return (
      <div className="content-container marr margT">
          <div className="card-area">
          {nodes.loading &&<em>Loading nodes...</em>}
          {nodes.error && <span className="text-danger">ERROR: {nodes.error}</span>}
          {nodes.items && <div>{nodes.items.map((node, index) => (

            <div ref={node.UnitID} key={index} onClick={(e) => {this.onItemClick(node.UnitID)}} className='card'>
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


// <Table striped bordered condensed hover className="dispT">
// <thead>
//   <tr>
//     <th>Unit ID</th>
//     <th>IP address</th>
//     <th>PrimaryInterf</th>
//     <th>Platform</th>
//   </tr>
// </thead>
//   {nodes.items.map((node, index) => (
//
//     <tbody>
//       <tr>
//         <td>{node.UnitID}</td>
//         <td>{node.Software.IP_address}</td>
//         <td>{node.Software.PrimaryInterface}</td>
//         <td>{node.Hardware.Platform}</td>
//       </tr>
//
//     </tbody>
//     ))}
//     </Table>
