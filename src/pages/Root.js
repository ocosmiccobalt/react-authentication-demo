import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
// import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' })
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
