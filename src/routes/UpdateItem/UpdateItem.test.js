import React from 'react';
import ReactDOM from 'react-dom';
import UpdateItem from './UpdateItem';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Router><UpdateItem /></Router>, div);

  ReactDOM.unmountComponentAtNode(div);
}); 