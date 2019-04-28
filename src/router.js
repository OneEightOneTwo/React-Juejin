import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Header from './components/Header/Header.jsx';
import Welcome from './routes/Welcome/Welcome.jsx';
import Books from './routes/Books/Books.jsx';
import Events from './routes/Events/Events.jsx';
import Pins from './routes/Pins/Pins.jsx';
import Topics from './routes/Topics/Topics.jsx';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/welcome' component={Welcome} />
          <Route path='/books' component={Books} />
          <Route path='/events' component={Events} />
          <Route path='/pins' component={Pins} />
          <Route path='/topics' component={Topics} />
          {/* 匹配不到路由就重定向到welcome */}
          <Redirect to='/welcome' />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default RouterConfig;
