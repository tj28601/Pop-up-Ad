import './app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import Popup from './components/Popup'


// let headerElement = (
//   <h1>
//     I am a React element! Hear me roar!
//   </h1>
// );
//
// ReactDOM.render(
//   headerElement,
//   document.getElementById('app')
// );

ReactDOM.render(
	  <Popup artist="Taylor Swift" />,
	  document.getElementById('ad')
	);
