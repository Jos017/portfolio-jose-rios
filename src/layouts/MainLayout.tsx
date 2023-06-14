import { Outlet } from 'react-router-dom';
import { NAVIGATION } from '../common/const';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar items={NAVIGATION}/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
