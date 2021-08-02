import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import j from './images/j.jpeg'

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"></link>
      <style>{`body { background-color : black;`}</style>
      <script src="/__/firebase/8.8.0/firebase-app.js"></script>
      <script src="/__/firebase/8.8.0/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
      <title>{ `Jason's blog` }</title>
      <link rel = "icon" href = {j} type = "image/x-icon"></link>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
