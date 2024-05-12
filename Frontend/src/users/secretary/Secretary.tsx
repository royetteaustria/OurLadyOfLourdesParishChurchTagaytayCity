import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './common/Loader';
import secretaryroutes from '../secretary/routes/Index'
import PageError from '../../components/error/PageError';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function Secretary () {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader/>
  ) : (
    <>
      <Routes>
      <Route path='*' element={<PageError />}/>
      <Route element={<DefaultLayout />}>
          {secretaryroutes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  )
}

export default Secretary