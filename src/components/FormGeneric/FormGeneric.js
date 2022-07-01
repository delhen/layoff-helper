import React, { Component } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'

export default class FormGeneric extends Component {
  render() {
    return (
      <form className="w-full z-10 text-left md:mt-8 mt-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input label="Full Name" placeholder="John Doe" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input label="Email" placeholder="johndoe@example.com" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input label="Password" placeholder="Min 8 Length" type="password" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input label="Confirm Password" placeholder="Same as password" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input label="Previous Company" placeholder="PT. XYZ" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input label="Job Position" placeholder="Content Creator" type="text" />
          </div>
        </div>
        <div className='mx-auto w-full flex justify-center'>
          <Button text="Submit" color="blue" />
        </div>
      </form>
    )
  }
}
