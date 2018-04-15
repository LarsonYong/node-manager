import React, {Component} from 'react';
import '../_css/NodeConfig.css'
import { SplitButton, MenuItem } from 'react-bootstrap';
import { history } from '../_helpers';
import { BrowserRouter } from "react-router-dom";
import { userService } from '../_services';
import { nodeActions } from '../_actions';
import { connect } from 'react-redux';


class NodeConfig extends React.Component {
  constructor(props){
    super(props);
    userService.verifyToken1();
    this.props.dispatch(nodeActions.getAll());
    this.clickedUnitID = this.clickedUnitID.bind(this);
    this.state = {
      selectedID: 'Unit ID'
    };
    const pathname = document.location.pathname
    const lastDigit = pathname.substr(pathname.length -1)
    if (lastDigit.match(/[0-9]/)){
      const ID = pathname.substr(7, pathname.length)
      this.state = {
        selectedID: ID
      };
    }
  }

  componentDidMount() {
  }

  clickedUnitID(data) {
    this.setState({selectedID:data})
    history.push("config" + data);
  }

  render() {
    const { nodes } = this.props;
    console.log(this.props.nodes)
    return(
      <div className="content-container marT">
        <SplitButton

          bsStyle={'success'}
          title={this.state.selectedID}
          id={'Units'}
        >
        {nodes.loading &&<em>Loading nodes...</em>}
        {nodes.error && <span className="text-danger">ERROR: {nodes.error}</span>}
        {nodes.items &&nodes.items.map((node, index) => (
          <MenuItem onClick={(e) => {this.clickedUnitID(node.UnitID)}} key={node.UnitID}>{node.UnitID}</MenuItem>
        ))}
        </SplitButton>
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

const connectedNodeConfig = connect(mapStateToProps)(NodeConfig);
export { connectedNodeConfig as NodeConfig };
