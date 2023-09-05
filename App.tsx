import React from 'react';
import RootNavigator from './App/navigation/rootNavigation';
import { Provider } from 'react-redux';
import { store } from './App/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;