import React from 'react';
import ReactDOM from 'react-dom';

import Component from './component.jsx';

main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  ReactDOM.render(<Component />, app);
}
