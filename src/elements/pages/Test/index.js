import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import TestPop from '../../popups/Test'

import Popups from '../../popups'

export default class Test extends PureComponent {
  render() {
    return (
      <div>Test
        <Link to='/'>go home</Link>
        <Popups place='left'>
          <TestPop/>
        </Popups>
      </div>
    )
  }
}
