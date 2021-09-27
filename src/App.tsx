import React, { Fragment } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';

interface Props {}

const App = (props: Props) => {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
};

export default App;
