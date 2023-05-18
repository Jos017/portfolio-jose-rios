import { Outlet } from 'react-router-dom';
import { NAVIGATION } from '../common/const';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar items={NAVIGATION} maxWidth="xl" height="md" />
      <Outlet />
      <Footer maxWidth="xl" height="md" />
    </>
  );
};

export default MainLayout;
