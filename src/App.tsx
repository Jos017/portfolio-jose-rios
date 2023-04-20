import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { navItems } from './common/const';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const Layout = () => {
  return (
    <>
      <Navbar items={navItems} maxWidth="xl" height="md" />
      <Outlet />
      <Footer maxWidth="xl" height="md" />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
