import { Component } from 'react';
import React from 'react';


export class Img extends Component {
  
  render() {
      console.log(this.props.img);
const {img} = this.props
    return (
      <div>
        {/* {img[0]} */}
      </div>
    );
  }
}
