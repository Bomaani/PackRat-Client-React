import React from 'react';
import ReactDOM from 'react-dom';
import CollectionListPage from './CollectionListPage';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><CollectionListPage /> </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});