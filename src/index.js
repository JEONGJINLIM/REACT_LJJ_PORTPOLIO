import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			{/*없던것*/}
			<App />
		</Provider>
		{/* 없던것 */}
	</HashRouter>,

	document.getElementById('root')
);
