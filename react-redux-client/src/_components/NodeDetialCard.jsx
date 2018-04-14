import React, {Component} from 'react';
import '../_css/NodeDetialCard.css'

class NodeDetialCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const selectedUnitID = this.props.selectedNode
    return (
        <div className="node-detail-area">
          <div className="detail-title">
            <h1>{this.props.node.UnitID}</h1>
            <p>{this.props.node.Software.BuildVersion}</p>
          </div>
          <div className="params clearfix">
            <div className="col">
              <div className="detail-card">
                <h2 >Software</h2>
                <pre >Primary Interface:   {this.props.node.Software.PrimaryInterface}</pre>
                <pre>IP address:   {this.props.node.Software.IP_address}</pre>
                <pre>BackDoor IP:   {this.props.node.Software.BackDoor_IP}</pre>
                <pre>Sensor Board Version:   {this.props.node.Software.SensorBoardVersion}</pre>
                <pre>AP:   {this.props.node.Software.AP}</pre>
              </div>
              <div className="detail-card">
                <h2 >Camera</h2>
                <pre>manufacturer:   {this.props.node.Hardware.Camera.manufacturer}</pre>
                <pre>Type:   {this.props.node.Hardware.Camera.Type}</pre>
                <pre>Lens:   {this.props.node.Hardware.Camera.lens}</pre>
              </div>
            </div>
            <div className="col">
              <div className="detail-card">
                <h2 >Hardware</h2>
                <pre>UPS:   {this.props.node.Hardware.UPS}</pre>
                <pre>Sensor Board:   {this.props.node.Hardware.SensorBoard}</pre>
                <pre>Platform:   {this.props.node.Hardware.Platform}</pre>
                <pre>WIFI Module:   {this.props.node.Hardware.WIFIModule}</pre>
                <pre>4G Module:   {this.props.node.Hardware.FourGModule}</pre>
                <pre>Reset board:   {this.props.node.Hardware.ResetBoard}</pre>
              </div>
              <div className="detail-card ssd">
                <h2 >SSD</h2>
                <pre>manufacturer:   {this.props.node.Hardware.SSD.manufacturer}</pre>
                <pre>Type:   {this.props.node.Hardware.SSD.Type}</pre>
                <pre>Capacity:   {this.props.node.Hardware.SSD.Capacity}</pre>
              </div>
            </div>
            <div className="col">
              <div className="detail-card">
                <h2 >Test</h2>
                <pre>Who: {this.props.node.Test.Who}</pre>
                <pre>What: {this.props.node.Test.What}</pre>
                <pre>When: {this.props.node.Test.When}</pre>
              </div>
              <div className="detail-card">
                <h2  >SIM</h2>
                <pre>Carrier:   {this.props.node.Hardware.SIM.Carrier}</pre>
                <pre>APN:   {this.props.node.Hardware.SIM.APN}</pre>
                <pre>IP address:   {this.props.node.Hardware.SIM.IP_address}</pre>
              </div>
            </div>


          </div>
        </div>

    )
  }
}

module.exports = NodeDetialCard;
