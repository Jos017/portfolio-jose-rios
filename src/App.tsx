import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import Resume from './pages/Resume';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: '/resume',
      element: <Resume />,
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
