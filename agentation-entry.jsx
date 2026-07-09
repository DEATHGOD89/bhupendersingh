import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

// Wait for DOM to be ready
function init() {
  if (document.getElementById('agentation-root')) return;
  const container = document.createElement('div');
  container.id = 'agentation-root';
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(React.createElement(Agentation, {}));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
