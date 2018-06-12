import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { dispatch } from '@/utils/store'
import styles from './index.less'

@withRouter
export default class Home extends PureComponent {

  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }

  submit = e => {
    e.preventDefault()
    const formData = new FormData()
    const { files } = e.target.querySelector('.file')
    Array.from(files).map(file => formData.append('filekey', file))

    fetch('/api/v1/upload', {
      body: formData,
      method: 'POST'
    })
      .then(r => console.log(r))
  }

  render() {
    return (
      <div className={ styles.home }>
        you react project bulid success!
        <span onClick={() => dispatch({type: 'SET_USER_INFO', data: false})}>重新渲染</span>
        <Link to='/test'>go Test</Link>
        <form onSubmit={ this.submit }>
          <input className="file" type="file" multiple/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}
