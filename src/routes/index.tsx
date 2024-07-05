import { Route, Routes as ReactRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Page } from '../pages/Page';
import { RouteGuard } from './RouteGuard';


const Routes = () => (
  <BrowserRouter>
    <ReactRoutes>
      <Route path='/dash-home' element={<RouteGuard component={<Home />} />} />
      <Route path='/dash-page' element={<RouteGuard component={<Page />} />} />
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
