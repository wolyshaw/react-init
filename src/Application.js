import React, { Component } from 'react'
import Pages from '@/Pages'
import Header from '@/Components/Header'
import 'purecss/build/pure-min.css'

export default class Application extends Component {
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
