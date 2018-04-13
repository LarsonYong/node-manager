import React,  {Component} from 'react';
import '../_css/NodeDisplay.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { nodeActions } from '../_actions';
import { userService } from '../_services';

var NodeCard = require('./NodeCard')

class NodeDisplay extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    userService.verifyToken1();
    this.props.dispatch(nodeActions.getAll());
    console.log('props: ', this.props);
    const nodesss = nodeActions.getAll();
    console.log(nodesss)
  }


  render () {
    const { nodes} = this.props;
    console.log("PROPS: ", this.props)
    return (
      <div className="content-container marr margT">
          <div className="card-area">
          {nodes.loading &&<em>Loading nodes...</em>}
          {nodes.error && <span className="text-danger">ERROR: {nodes.error}</span>}
          {nodes.items && <div>{nodes.items.map((node, index) => (
            <div class='card'>
             <div class='card-body clearfix'>
               <div  className={"card-body-left " + node.Hardware.Platform } >
                 <h2> {node.Hardware.Platform} </h2>
               </div>
               <div class="card-body-right">
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
    console.log("nodes: ", nodes);
    console.log("state: ", state);
    return {
        nodes: state.nodes
    };
}

const connectedNodeDisplay = connect(mapStateToProps)(NodeDisplay);
export { connectedNodeDisplay as NodeDisplay };


// <Table striped bordered condensed hover class="dispT">
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
