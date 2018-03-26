import React, { PureComponent } from 'react'

export default class User extends PureComponent {

  state = {
    es: '123456asdas'
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
