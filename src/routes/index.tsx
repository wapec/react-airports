import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Loader, Dimmer } from 'semantic-ui-react';

const MainComponent = lazy(() => import('../components/Main/Main'));

const loaderStyles = {
  backgroundColor: '#d8e7ea',
};

const Routes = () => {
  return (
    <Suspense
      fallback={
        <Dimmer active inverted style={loaderStyles}>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      }
    >
      <Switch>
        <Route component={MainComponent} path="/react-airports" exact />
      </Switch>
    </Suspense>
  );
};

export default Routes;
