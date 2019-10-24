import React from 'react';
import ReactDOM from 'react-dom';
import ItemPage from './ItemPage';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const match = {
    params: {
      item_id: 2,
    }
  }

  ReactDOM.render(<Router><ItemPage match={match} /> </Router>, div);

  ReactDOM.unmountComponentAtNode(div);
});