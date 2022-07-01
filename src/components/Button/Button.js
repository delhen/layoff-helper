import React, { Component } from 'react'
import colors from './ButtonColors';

export default class Button extends Component {
  render() {
    return (
      <button className={`${colors[this.props.color]} bg-blue-500 text-white border-none w-48 p-4 mx-4 rounded mt-2`}>{this.props.text}</button>
    )
  }
}
