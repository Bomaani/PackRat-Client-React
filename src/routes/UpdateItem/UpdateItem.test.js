import React from 'react';
import ReactDOM from 'react-dom';
import UpdateItem from './UpdateItem';
import { BrowserRouter as Router } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const location = {
    state: {
      item: {
        title: 'title',
        info: 'Some info',
        year_released: 1993,
        image_url: 'image.com',
      }
    }
  }

  ReactDOM.render(<Router><UpdateItem location={location} /></Router>, div);

  ReactDOM.unmountComponentAtNode(div);
}); 