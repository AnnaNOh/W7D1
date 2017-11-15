import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store.js';
import Root from './components/root.jsx';

const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("content");
  ReactDOM.render(<Root store = {store} />, rootEl);
});
