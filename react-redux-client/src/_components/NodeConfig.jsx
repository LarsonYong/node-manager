import React, {Component} from 'react';
import '../_css/NodeConfig.css'
import { SplitButton, MenuItem,FormGroup,FormControl, ControlLabel   } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import { history } from '../_helpers';
import { BrowserRouter } from "react-router-dom";
import { userService } from '../_services';
import { nodeService } from '../_services';
import { nodeActions } from '../_actions';
import { connect } from 'react-redux';


class NodeConfig extends React.Component {
  constructor(props){
    super(props);
    userService.verifyToken1();
    this.props.dispatch(nodeActions.getAll());
    this.clickedUnitID = this.clickedUnitID.bind(this);
    this.state = {
      selectedID: 'Unit ID',
      selectedNode: '',
      selected: false
    };
    const pathname = document.location.pathname
    const lastDigit = pathname.substr(pathname.length -1)
    if (lastDigit.match(/[0-9]/)){
      const ID = pathname.substr(7, pathname.length)
      nodeService.getNode(ID).then(result => this.setState({
        selectedNode: result.node,
        selectedID: 'Unit ID:' + ID,
        selected: true
      }));
    }
  }

  componentDidMount() {

  }

  componentWillUpdate(){
    if (this.state.clicked){
      return true
    }
  }

  clickedUnitID(data, node) {
    this.setState({
      selectedID:'Unit ID:' + data,
      selectedNode: node,
      selected: true
  });

    history.push("config" + data);
    location.reload();
  }

  render() {
    const { nodes } = this.props;
    console.log(this.props)
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
          <MenuItem onClick={(e) => {this.clickedUnitID(node.UnitID, node)}} key={node.UnitID}>Unit ID: {node.UnitID}</MenuItem>
        ))}
        </SplitButton>
        {this.state.selected &&
          <FormGroup className="NodeForm margT">
            <div className='col-4 noPaddTop'>
              <h2>Software</h2>
              <ControlLabel >Build Version: </ControlLabel>
              <FormControl componentClass="textarea" defaultValue={this.state.selectedNode.Software.BuildVersion}></FormControl>
              <ControlLabel>Primary Interface: </ControlLabel>
              <FormControl inline="true" defaultValue={this.state.selectedNode.Software.PrimaryInterface}></FormControl>
              <ControlLabel>IP address:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Software.IP_address}></FormControl>
              <ControlLabel>BackDoor IP:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Software.BackDoor_IP}></FormControl>
              <ControlLabel>AP:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Software.AP}></FormControl>
              <ControlLabel>Sensor Board Version:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Software.SensorBoardVersion}></FormControl>

            </div>


            <div className='col-4 noPaddTop'>
              <h2>SSD</h2>
              <ControlLabel>Manufacturer:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.SSD.manufacturer}></FormControl>
              <ControlLabel>Type:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.SSD.Type}></FormControl>
              <ControlLabel>Lens:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.SSD.Capacity}></FormControl>
              <h2>SIM</h2>
              <ControlLabel>Carrier:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.SIM.Carrier}></FormControl>
              <ControlLabel>TyAPNpe:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.SIM.APN}></FormControl>
              <ControlLabel>IP address:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.SIM.IP_address}></FormControl>
            </div>
            <div className='col-4 noPaddTop'>
              <h2>Test</h2>
              <ControlLabel>Who:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Test.Who}></FormControl>
              <ControlLabel>When:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Test.When}></FormControl>
              <ControlLabel>What:</ControlLabel>
              <FormControl componentClass="textarea" defaultValue={this.state.selectedNode.Test.What}></FormControl>
              <h2> Camera </h2>
              <ControlLabel>Manufacturer:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.Camera.manufacturer}></FormControl>
              <ControlLabel>Type:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.Camera.Type}></FormControl>
              <ControlLabel>Lens:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.Camera.lens}></FormControl>

            </div>
            <div className='col-4 '>
              <h2>Hardware</h2>
              <ControlLabel>Platform:  </ControlLabel>
              <FormControl inline="true" defaultValue={this.state.selectedNode.Hardware.Platform}></FormControl>
              <ControlLabel>UPS: </ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.UPS}></FormControl>
              <ControlLabel>ensor Board:  </ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.SensorBoard}></FormControl>
              <ControlLabel>WIFI Module:  </ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.WIFIModule}></FormControl>
              <ControlLabel>4G Module:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.FourGModule}></FormControl>
              <ControlLabel>Reset board:</ControlLabel>
              <FormControl defaultValue={this.state.selectedNode.Hardware.ResetBoard}></FormControl>
              <div className="submit-btn">
                <Button type="button" className="btn btn-success">UPDATE NODE</Button>
              </div>
            </div>

          </FormGroup>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { nodes} = state;
  return {
      nodes: state.nodes
  };
}

const connectedNodeConfig = connect(mapStateToProps)(NodeConfig);
export { connectedNodeConfig as NodeConfig };
