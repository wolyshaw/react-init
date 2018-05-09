import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

@connect(({userInfo}) => ({userInfo}))
export default class Bundle extends Component {

  static propTypes = {
    load: PropTypes.func,
    children: PropTypes.func,
    userInfo: PropTypes.any
  }

  state = { mod: null }

  componentDidMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load = (props) => {
    this.setState({mod: null})
    this.setState({ mod: props.load })
    // try {
    //   props.load((mod) => {
    //     this.setState({ mod: mod.default ? mod.default : mod })
    //   })
    // } catch (error) {
    //   this.setState({ mod: props.load })
    // }
  }

  render() {
    return (
      this.state.mod ? this.props.children(this.state.mod) : null
    )
  }
}
