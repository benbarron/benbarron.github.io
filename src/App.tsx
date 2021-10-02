import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Home } from './components/Home';

interface Props {}

const App = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <div className='container-lg'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/exp' component={Experience} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
