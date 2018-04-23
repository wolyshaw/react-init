import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

export default class Bundle extends PureComponent {

  static propTypes = {
    load: propTypes.func,
    children: propTypes.func
  }

  state = { mod: null }

  componentWillMount = () => {
    this.load(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load = (props)=> {
    this.setState({ mod: null })
    props.load((mod) => {
      this.setState({ mod: mod.default ? mod.default : mod })
    })
  }

  render() {
    return (
      <span>
        { this.state.mod ? this.props.children(this.state.mod) : null }
      </span>
    )
  }
}

