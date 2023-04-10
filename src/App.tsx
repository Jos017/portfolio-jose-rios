import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

type Sizes = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const Layout = () => {
  return (
    <>
      <Navbar maxWidth="xl" height="md" />
      <main className="flex flex-grow max-w-screen-xl mx-auto w-full p-4 sm:p-8">
        <Outlet />
      </main>
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
    <div className="min-h-screen flex flex-col">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
