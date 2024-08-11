import { Outlet } from 'react-router-dom'
// import { Header } from '../components/Header'
import { LayoutContainer } from './styles'
import { HeaderComponent } from '../components/headercomponent'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderComponent />
      <Outlet />
    </LayoutContainer>
  )
}
