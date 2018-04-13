import React, {Component} from 'react';


class NodeCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
     return (
       <div class='card'>
        <div class='card-body clearfix'>
          <div class="card-body-left" class={this.prop.Platform}>
            <h2> {this.prop.Platform} </h2>
          </div>
          <div class="card-body-right">
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
