import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import mainRoutes from './routes/mainRoutes';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {

  return (
    <div className='App'>
    <Switch>
      {mainRoutes.map((route, i) => {
        if (route.isProtected === true) {
          return <PrivateRoute key={i} {...route} path={`${route.path}`} />;
        } else {
          return <PublicRoute key={i} {...route} path={`${route.path}`} />;
        }
      })}
    </Switch>
    </div>
  );
}

export default App;
