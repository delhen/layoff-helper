import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        <label className="block uppercase text-sm font-bold text-sky-400 mb-2">{this.props.label}</label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-sky-500 focus:bg-white" type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    )
  }
}
