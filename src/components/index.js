import React, { Component } from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'
import Header from 'components/elements/Header'
import Pages from 'components/Pages'
import styles from './index.less'
import config from '../../config'

export default props => {
  return (
    <span>
      <Helmet
        htmlAttributes={{lang: 'en', amp: undefined}}
        titleTemplate={`%s | ${config.site.title}`}
        titleAttributes={{itemprop: 'name', lang: 'en'}}
        meta={[
          {name: 'keywords', content: config.site.keywords},
          {name: 'description', content: config.site.description},
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        ]}
      />
      <Header/>
      <Pages/>
    </span>
  )
}
