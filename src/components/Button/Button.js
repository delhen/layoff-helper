import React, { Component } from 'react'
import colors from './ButtonColors';

export default class Button extends Component {
  render() {
    return (
      <button className={`${colors[this.props.color]} bg-blue-500 text-white border-none md:w-48 md:p-4 p-2 w-full md:mx-4 rounded mt-2`} type="submit">{this.props.text}</button>
    )
  }
}
