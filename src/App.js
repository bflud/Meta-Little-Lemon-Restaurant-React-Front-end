import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';
import Login from './components/pages/Login';
import About from './components/pages/About';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('about').path} 
            element={<About />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<UnderConstruction />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<Login />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
