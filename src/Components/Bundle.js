import { Component, PureComponent } from 'react'
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
    const proto = props.load.prototype
    if(proto instanceof PureComponent || proto instanceof Component) {
      this.setState({ mod: props.load })
    } else {
      props.load((mod) => {
        this.setState({ mod: mod.default ? mod.default : mod })
      })
    }
  }

  render() {
    return (
      this.state.mod ? this.props.children(this.state.mod) : null
    )
  }
}
