import Welcome from '../page/Welcome'
import ApiView from '../page/ApiView'
import { DesktopOutlined, ContainerOutlined } from '@ant-design/icons'

const routes = [
  {
    name: 'welcome',
    path: '/welcome',
    component: Welcome,
    icon: <DesktopOutlined />
  },
  {
    name: 'api',
    path: '/api',
    component: ApiView,
    icon: <ContainerOutlined />
  },
]

export default routes