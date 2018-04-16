import React, {Component} from 'react';
import '../_css/NodeDetialCard.css'
import Button from 'react-bootstrap/lib/Button';
import { history } from '../_helpers';

class NodeDetialCard extends React.Component {
  constructor(props) {
    super(props);
    this.configNode = this.configNode.bind(this);
  }

  configNode(data) {
    const path = 'config' + data;
    document.getElementById('card-area').style.display = "none";
    window.location='config' + data;
  }

  render () {
    const selectedUnitID = this.props.selectedNode
    return (
        <div className="node-detail-area clearfix">
          <div className="detail-title clearfix">
            <div className="detail-title-content">
              <h1>{this.props.node.UnitID}</h1>
              <p>{this.props.node.Software.BuildVersion}</p>
            </div>
            <div className="detail-title-button">
              <Button type="button" onMouseDown={() => this.configNode(this.props.node.UnitID)} className="btn btn-sm btn-success">Edite</Button></div>
            </div>
          <div className="params clearfix">
            <div className="col">
              <div className="detail-card">
                <h2 >Software</h2>
                <div className='detail-line clearfix'>
                  <div >Primary Interface: </div>
                   <p> {this.props.node.Software.PrimaryInterface}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>IP address:  </div>
                  <p> {this.props.node.Software.IP_address}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>BackDoor IP:  </div>
                  <p> {this.props.node.Software.BackDoor_IP}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>AP:  </div>
                  <p> {this.props.node.Software.AP}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>Sensor Board Version:  </div>
                  <p> {this.props.node.Software.SensorBoardVersion}</p>
                </div>
              </div>
              <div className="detail-card">
                <h2 >Camera</h2>
                <div className='detail-line clearfix'>
                  <div>Manufacturer:   </div>
                  <p>{this.props.node.Hardware.Camera.manufacturer}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>Type:   </div>
                  <p>{this.props.node.Hardware.Camera.Type}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>Lens: </div>
                  <p>  {this.props.node.Hardware.Camera.lens}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="detail-card">
                <h2 >Hardware</h2>
                <div className='detail-line clearfix'>
                  <div>Platform:   </div>
                  <p>{this.props.node.Hardware.Platform}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>UPS:  </div>
                  <p> {this.props.node.Hardware.UPS}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>Sensor Board:   </div>
                  <p>{this.props.node.Hardware.SensorBoard}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>WIFI Module:   </div>
                  <p>{this.props.node.Hardware.WIFIModule}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>4G Module:  </div>
                  <p> {this.props.node.Hardware.FourGModule}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>Reset board:   </div>
                  <p>{this.props.node.Hardware.ResetBoard}</p>
                </div>
              </div>
              <div className="detail-card ssd">
                <h2 >SSD</h2>
                <div className='detail-line clearfix'>
                  <div>Manufacturer:   </div>
                  <p>{this.props.node.Hardware.SSD.manufacturer}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>Type:   </div>
                  <p>{this.props.node.Hardware.SSD.Type}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>Capacity:   </div>
                  <p>{this.props.node.Hardware.SSD.Capacity}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="detail-card test">
                <h2 >Test</h2>
                <div className='detail-line clearfix test-d'>
                  <div>Who: </div>
                  <p>{this.props.node.Test.Who}</p>
                </div>
                <div className='detail-line clearfix test-d what-test'>
                  <div>What: </div>
                  <p>{this.props.node.Test.What}</p>
                </div>
                <div className='detail-line clearfix test-d'>
                  <div>When: </div>
                  <p>{this.props.node.Test.When}</p>
                </div>
              </div>
              <div className="detail-card">
                <h2  >SIM</h2>
                <div className='detail-line clearfix'>
                  <div>Carrier:   </div>
                  <p>{this.props.node.Hardware.SIM.Carrier}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>APN:   </div>
                  <p>{this.props.node.Hardware.SIM.APN}</p>
                </div>
                <div className='detail-line clearfix'>
                  <div>IP address:   </div>
                  <p>{this.props.node.Hardware.SIM.IP_address}</p>
                </div>
              </div>
            </div>


          </div>
        </div>

    )
  }
}

module.exports = NodeDetialCard;
