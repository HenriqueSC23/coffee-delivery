import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Checkout } from './pages/Checkout/index'
import { Success } from './pages/Success/index'
import { DefaultLayout } from './DefaultLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
