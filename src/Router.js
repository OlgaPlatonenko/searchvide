import { Switch, Route } from 'react-router-dom';

import { Main, SavedQueries, Favourite } from './screens';

export const RouterView = () => {

  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Main}
      />

      <Route
        path="/saved"
        component={SavedQueries}
      />

      <Route
      exact
        path="/favourite"
        component={Favourite}
      />

      <Route path="*">
        <div>404 Not Found</div>
      </Route>
    </Switch>
  );
};
