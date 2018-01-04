import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from 'components/elements/Header'
import Pages from 'components/Pages'
import styles from './index.less'

export default props => {
  return (
    <span>
      <Header/>
      <Pages/>
    </span>
  )
}
