import React from 'react';
import { withRouter, useRouteMatch, Route, Switch } from 'react-router-dom';

import './Welcome.scss';

// components
import WelcomeGreeting from './Greeting';
import WelcomePromptName from './PromptName';

const Welcome = () => {

  let { path } = useRouteMatch();

  return (
    <div className="welcome-container">
      <Switch>
        <Route exact path={path} component={WelcomeGreeting}></Route>
        <Route path={`${path}/who-are-you`} component={WelcomePromptName}></Route>
      </Switch>
    </div>
  )
}

export default withRouter(Welcome);
