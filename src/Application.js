import React, { PureComponent } from 'react'
import Pages from '@/Pages'
import Header from '@/Components/Header'
import 'purecss/build/pure-min.css'

export default class Application extends PureComponent {
  render() {
    return (
      <div>
        <Header/>
        <Pages/>
        <footer>footer</footer>
      </div>
    )
  }
}
