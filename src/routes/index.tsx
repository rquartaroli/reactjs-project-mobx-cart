import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Cart from '../pages/Cart';
import { Dashboard } from '../pages/Dashboard';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;