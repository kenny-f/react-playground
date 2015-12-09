import React from 'react';
import { render } from 'react-dom';

import Component from './component.jsx';

main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);

  render(<Component />, app);
}
