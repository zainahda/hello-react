import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
      <img src={this.props.linkfoto} alt={this.props.keterangan} width={this.props.lebar}/>
    )
  }
}

export default Image;
