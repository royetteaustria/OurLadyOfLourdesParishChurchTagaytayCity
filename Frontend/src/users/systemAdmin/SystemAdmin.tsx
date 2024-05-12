import Loader from './common/Loader'
import { Suspense, lazy, useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom'
import systemAdminroutes from './routes/Route';
import Page404 from './error/Page404';
const DefaultLayout = lazy(() => import('./layout/DefaultLayout')) 

const SystemAdmin = () => {
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
        setTimeout(() => setLoading(false), 800);
      }, []);

    return loading ? (
        <Loader/>
  ) : (
    <>
    <Routes>
    <Route path='*' element={<Page404/>}/>
        <Route element={<DefaultLayout/>}>
        {systemAdminroutes.map((routes, index) => {
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

export default SystemAdmin