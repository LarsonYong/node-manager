import React, {Component} from 'react';
import '../_css/NodeConfig.css'
import { SplitButton, MenuItem,FormGroup,FormControl, ControlLabel, Form   } from 'react-bootstrap';
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
    this.handleHardwareChange = this.handleHardwareChange.bind(this);
    this.handleSoftwareChange = this.handleSoftwareChange.bind(this);
    this.handleTestChange = this.handleTestChange.bind(this);
    this.handleCameraChange = this.handleCameraChange.bind(this);
    this.handleSSDChange = this.handleSSDChange.bind(this);
    this.handleSIMChange = this.handleSIMChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDefalutvalue = this.getDefalutvalue.bind(this);
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
        selectedNode: result.data[0],
        selectedID: 'Unit ID:' + ID,
        UpdateUnitID: ID,
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

  getDefalutvalue(data){
    return document.getElementById(data).defaultValue
  }

  handleHardwareChange(event) {
    const title = event.target.id
    const UpdateUnitID = this.state.selectedNode.UnitID
    let oldValue = this.state.selectedNode;
    let newValue = this.state.selectedNode;
    newValue.Hardware[title]=event.target.value
    this.setState({
      selectedNode:newValue
    })
    this.setState({UpdateUnitID:UpdateUnitID});
  }

  handleSoftwareChange(event) {
    const title = event.target.id
    const UpdateUnitID = this.state.selectedNode.UnitID
    let oldValue = this.state.selectedNode;
    let newValue = this.state.selectedNode;
    newValue.Software[title]=event.target.value
    this.setState({
      selectedNode:newValue
    })
    this.setState({UpdateUnitID:UpdateUnitID});
  }

  handleTestChange(event) {
    const title = event.target.id
    const UpdateUnitID = this.state.selectedNode.UnitID
    let oldValue = this.state.selectedNode;
    let newValue = this.state.selectedNode;
    newValue.Test[title]=event.target.value
    this.setState({
      selectedNode:newValue
    })
    this.setState({UpdateUnitID:UpdateUnitID});
  }

  handleCameraChange(event) {
    const title = event.target.id
    const UpdateUnitID = this.state.selectedNode.UnitID
    let oldValue = this.state.selectedNode;
    let newValue = this.state.selectedNode;
    newValue.Hardware.Camera[title]=event.target.value
    this.setState({
      selectedNode:newValue
    })
    this.setState({UpdateUnitID:UpdateUnitID});
  }

  handleSSDChange(event) {
    const title = event.target.id
    const UpdateUnitID = this.state.selectedNode.UnitID
    let oldValue = this.state.selectedNode;
    let newValue = this.state.selectedNode;
    newValue.Hardware.SSD[title]=event.target.value
    this.setState({
      selectedNode:newValue
    })
    this.setState({UpdateUnitID:UpdateUnitID});
  }

  handleSIMChange(event) {
    const title = event.target.id
    const UpdateUnitID = this.state.selectedNode.UnitID
    let oldValue = this.state.selectedNode;
    let newValue = this.state.selectedNode;
    newValue.Hardware.SIM[title]=event.target.value
    this.setState({
      selectedNode:newValue
    })
    this.setState({UpdateUnitID:UpdateUnitID});
  }

  handleSubmit(event) {
    const UnitID= this.state.UpdateUnitID;
    const updateUnit = {

      Hardware: this.state.selectedNode.Hardware,
      Software: this.state.selectedNode.Software,
      Test: this.state.selectedNode.Test
    }
    event.preventDefault();
    nodeService.updateNode(UnitID, updateUnit).then(result => {
      console.log(result)
      if (result && result.success === true){
        location.reload();
      }
    })
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
          <form onSubmit={this.handleSubmit}>
          <FormGroup className="NodeForm margT">
            <div className='col-4 noPaddTop'>
              <h2>Software</h2>
              <ControlLabel >Build Version: </ControlLabel>
              <FormControl id="BuildVersion" componentClass="textarea" onChange={this.handleSoftwareChange} defaultValue={this.state.selectedNode.Software.BuildVersion}></FormControl>
              <ControlLabel>Primary Interface: </ControlLabel>
              <FormControl id="PrimaryInterface" onChange={this.handleSoftwareChange} defaultValue={this.state.selectedNode.Software.PrimaryInterface}></FormControl>
              <ControlLabel>IP address:</ControlLabel>
              <FormControl id="IP_address" onChange={this.handleSoftwareChange} defaultValue={this.state.selectedNode.Software.IP_address}></FormControl>
              <ControlLabel>BackDoor IP:</ControlLabel>
              <FormControl id="BackDoor_IP" onChange={this.handleSoftwareChange} defaultValue={this.state.selectedNode.Software.BackDoor_IP}></FormControl>
              <ControlLabel>AP:</ControlLabel>
              <FormControl id="AP" onChange={this.handleSoftwareChange} defaultValue={this.state.selectedNode.Software.AP}></FormControl>
              <ControlLabel>Sensor Board Version:</ControlLabel>
              <FormControl id="SensorBoardVersion" onChange={this.handleSoftwareChange} defaultValue={this.state.selectedNode.Software.SensorBoardVersion}></FormControl>
            </div>
            <div className='col-4 noPaddTop'>
              <h2>SSD</h2>
              <ControlLabel>Manufacturer:</ControlLabel>
              <FormControl id="manufacturer" onChange={this.handleSSDChange} defaultValue={this.state.selectedNode.Hardware.SSD.manufacturer}></FormControl>
              <ControlLabel>Type:</ControlLabel>
              <FormControl id="Type" onChange={this.handleSSDChange} defaultValue={this.state.selectedNode.Hardware.SSD.Type}></FormControl>
              <ControlLabel>Lens:</ControlLabel>
              <FormControl id="Capacity" onChange={this.handleSSDChange} defaultValue={this.state.selectedNode.Hardware.SSD.Capacity}></FormControl>
              <h2>SIM</h2>
              <ControlLabel>Carrier:</ControlLabel>
              <FormControl id="Carrier" onChange={this.handleSIMChange} defaultValue={this.state.selectedNode.Hardware.SIM.Carrier}></FormControl>
              <ControlLabel>APN:</ControlLabel>
              <FormControl id="APN" onChange={this.handleSIMChange} defaultValue={this.state.selectedNode.Hardware.SIM.APN}></FormControl>
              <ControlLabel>IP address:</ControlLabel>
              <FormControl id="IP_address" onChange={this.handleSIMChange} defaultValue={this.state.selectedNode.Hardware.SIM.IP_address}></FormControl>
            </div>
            <div className='col-4 noPaddTop'>
              <h2>Test</h2>
              <ControlLabel>Who:</ControlLabel>
              <FormControl id="Who" onChange={this.handleTestChange} defaultValue={this.state.selectedNode.Test.Who}></FormControl>
              <ControlLabel>When:</ControlLabel>
              <FormControl id="When" onChange={this.handleTestChange} defaultValue={this.state.selectedNode.Test.When}></FormControl>
              <ControlLabel>What:</ControlLabel>
              <FormControl id="What" onChange={this.handleTestChange} componentClass="textarea" defaultValue={this.state.selectedNode.Test.What}></FormControl>
              <h2> Camera </h2>
              <ControlLabel>Manufacturer:</ControlLabel>
              <FormControl id="manufacturer" onChange={this.handleCameraChange} defaultValue={this.state.selectedNode.Hardware.Camera.manufacturer}></FormControl>
              <ControlLabel>Type:</ControlLabel>
              <FormControl id="Type" onChange={this.handleCameraChange} defaultValue={this.state.selectedNode.Hardware.Camera.Type}></FormControl>
              <ControlLabel>Lens:</ControlLabel>
              <FormControl id="lens" onChange={this.handleCameraChange} defaultValue={this.state.selectedNode.Hardware.Camera.lens}></FormControl>
            </div>
            <div className='col-4 '>
              <h2>Hardware</h2>
              <ControlLabel>Platform:  </ControlLabel>
              <FormControl id="Platform" onChange={this.handleHardwareChange} defaultValue={this.state.selectedNode.Hardware.Platform}></FormControl>
              <ControlLabel>UPS: </ControlLabel>
              <FormControl id="UPS" onChange={this.handleHardwareChange} defaultValue={this.state.selectedNode.Hardware.UPS}></FormControl>
              <ControlLabel>Sensor Board:  </ControlLabel>
              <FormControl id="SensorBoard" onChange={this.handleHardwareChange} defaultValue={this.state.selectedNode.Hardware.SensorBoard}></FormControl>
              <ControlLabel>WIFI Module:  </ControlLabel>
              <FormControl id="WIFIModule" onChange={this.handleHardwareChange} defaultValue={this.state.selectedNode.Hardware.WIFIModule}></FormControl>
              <ControlLabel>4G Module:</ControlLabel>
              <FormControl id="FourGModule" onChange={this.handleHardwareChange} defaultValue={this.state.selectedNode.Hardware.FourGModule}></FormControl>
              <ControlLabel>Reset Board:</ControlLabel>
              <FormControl id="ResetBoard" onChange={this.handleHardwareChange} defaultValue={this.state.selectedNode.Hardware.ResetBoard}></FormControl>
              <div className="submit-btn">
                <Button type="submit"  onClick={(e) => {this.handleClearForm}} className="btn btn-success">UPDATE NODE</Button>
              </div>
            </div>

          </FormGroup>
        </form>}
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
