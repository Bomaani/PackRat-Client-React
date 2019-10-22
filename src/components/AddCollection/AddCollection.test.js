import React from 'react';
import ReactDOM from 'react-dom';
import AddCollection from './AddCollection';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AddCollection />, div);

  ReactDOM.unmountComponentAtNode(div);
});