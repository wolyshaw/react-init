import React, { PureComponent } from 'react'

export default class User extends PureComponent {

  state = {
    es: 'evn'
  }

  setData = async () => {
    console.log(this.state)
  }

  render() {
    return (
      <div onClick={ this.setData }>
        User
      </div>
    )
  }
}
