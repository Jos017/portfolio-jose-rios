import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';

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
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
