import React,  {Component} from 'react';
import '../_css/NodeDisplay.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { nodeActions } from '../_actions';
import { userService } from '../_services';

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
      <div className="content-container blurred margT">
        <div class=" container col-6 temp">
          {nodes.loading &&<em>Loading nodes...</em>}
          {nodes.error && <span className="text-danger">ERROR: {nodes.error}</span>}
          {nodes.items && <Table striped bordered condensed hover class="dispT">
            {nodes.items.map((node, index) => (
              <tbody>
                <tr>
                  <td>Unit ID</td>
                  <td>{node.UnitID}</td>
                </tr>
                <tr>
                  <td>IP address</td>
                  <td>{node.Software.IP_address}</td>
                </tr>
                <tr>
                <td>PrimaryInterface</td>
                <td>{node.Software.PrimaryInterface}</td>
                </tr>

              </tbody>
              ))}
              </Table>
          }
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
// module.exports = NodeDisplay;
//
// {this.state.nodes.map((node, index) => (
//   <p key={index}>Hello, {node.UnitID} and {node.Software.IP_address}</p>
// ))}
