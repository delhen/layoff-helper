import React, { Component } from 'react'

export default class RegisterSuccessPage extends Component {
  render() {
    return (
      <div>
        <h2 className='text-5xl font-bold'>Registration Success!</h2>
        <br></br>
        <p className='text-lg'>Your registration is success. You can check your mail {"(example@mail.com)"} for account verification</p>
      </div>
    )
  }
}
