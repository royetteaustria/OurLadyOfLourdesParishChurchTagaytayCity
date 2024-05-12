import { Routes, Route } from "react-router-dom";
import PageError from "./components/error/PageError";
import { Suspense, useEffect, useState } from 'react';
import clientroutes from "./users/client/routes/Route";
import weddingroutes from "./users/weddingAdmin/routes";
import secretaryroutes from "./users/secretary/routes/Index";
import systemAdminroutes from "./users/systemAdmin/routes/Route";
import DefaultLayout from "./users/weddingAdmin/layout/DefaultLayout";
import SecretaryDefaultLayout from "./users/secretary/layout/DefaultLayout";
import Loader from "./users/weddingAdmin/common/Loader";
import SystemAdminDefaultLayout from "./users/systemAdmin/layout/DefaultLayout";
import Client from "./users/client/Client";
import ListofAdmin from "./users/systemAdmin/pages/ManageAccount/ListOfAdmin";
import ProtectedRoute from "./context/ProtectedRoutes";


function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader/>
  ) : (
    <>  
    
      <Routes>
        {/* Client Routes */}
        <Route path='*' element={<PageError />}/>
        <Route path="/" element={<Client/>} />
        {/* <Route path="*" element={<PageError />} /> */}
        {clientroutes.map((route, index) => {
          const { path, component: Component } = route;
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
        
        {/* Wedding Admin Routes */}
        <Route
          element={
            <ProtectedRoute allowedRoles={['Event Administrator']} 
            allowedPaths={weddingroutes.map(route => route.path)}
            />
          }>
            <Route element={<DefaultLayout />}>
            {weddingroutes.map((routes, index) => {
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
        </Route>
        
        {/* SystemAdmin Routes */}
        
        <Route
          element={
            <ProtectedRoute 
            allowedRoles={['System Administrator']} 
            allowedPaths={systemAdminroutes.map(route => route.path)}
          />
          }
        >
          <Route element={<SystemAdminDefaultLayout/>}>
          {/* <Route path="/SystemAdmin/listOfUser" element={<ListofAdmin/>} /> */}
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
        </Route>
        
        <Route
          element={
            <ProtectedRoute allowedRoles={['Parish Secretary']} 
            allowedPaths={secretaryroutes.map(route => route.path)}
            />
          }
        >
          <Route element={<SecretaryDefaultLayout />}>
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
        </Route>
        {/* Secretary Routes */}
      </Routes>
    </>
  )
}

export default App
