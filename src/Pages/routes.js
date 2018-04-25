import Bundle from '@/Components/Bundle'
const HomeLazy = require('bundle-loader?lazy&name=home!@/Pages/Home')
const RouterInfoLazy = require('bundle-loader?lazy&name=router-info!@/Pages/RouterInfo')

const Home = props => (
  <Bundle load={ HomeLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

const RouterInfo = props => (
  <Bundle load={ RouterInfoLazy }>
    { (Container) => <Container { ...props }/> }
  </Bundle>
)

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    exact: true,
    path: '/router-info',
    component: RouterInfo,
  }
]
