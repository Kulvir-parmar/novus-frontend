import {
  Link,
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { useAuthStore } from '@/hooks/AuthStore';
import Navbar from '@/components/Navbar';
import UserNavbar from '@/components/UserNavbar';
import LandingPage from '@/pages/LandingPage';
import SignIn from '@/pages/SignIn';
import Dashboard from '@/pages/Dashboard';

const App = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const { isLoading, data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3001/auth/user', {
        withCredentials: true,
      });
      return { data: response.data };
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isLoading) return null;

  // [ ]: SET STATE POORLY USED. FIX IT
  if (data?.data) {
    setUser(data.data);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path='/'
          element={user ? <Navigate to='/dashboard' /> : <Navbar />}
        >
          <Route index element={<LandingPage />} />
          <Route path='/fundraising' element={<LandingPage />} />
          <Route path='/about-us' element={<LandingPage />} />
        </Route>
        <Route path='/investor' element={<UserNavbar />}>
          <Route index path='/investor/dashboard' element={<Dashboard />} />
          <Route path='/investor/subscribe' element={<Dashboard />} />
          <Route path='/investor/portfolio' element={<Dashboard />} />
          <Route path='/investor/profile' element={<Dashboard />} />
        </Route>
        <Route
          path='/sign-in'
          element={
            !user ? (
              <SignIn />
            ) : (
              <div>
                Fuck off you already signed in
                <div>
                  <Link to='/'>Dashboard</Link>
                </div>
              </div>
            )
          }
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
