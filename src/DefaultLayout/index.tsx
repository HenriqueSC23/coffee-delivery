// import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutContainer } from './styles'
import { Home } from '../pages/Home'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Home />
      {/* <Outlet /> */}
    </LayoutContainer>
  )
}
