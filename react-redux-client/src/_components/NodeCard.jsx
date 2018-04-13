import React, {Component} from 'react';


class NodeCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
     return (
       <div className='card'>
        <div className='card-body clearfix'>
          <div className="card-body-left" className={this.prop.Platform}>
            <h2> {this.prop.Platform} </h2>
          </div>
          <div className="card-body-right">
            <h2> {this.props.UnitID}</h2>
            <p> {this.props.IP_address}</p>
            <p> {this.props.PrimaryInterface}</p>
          </div>
        </div>
       </div>
     )
  }
}


module.exports = NodeCard;
