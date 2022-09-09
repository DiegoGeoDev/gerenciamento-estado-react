import { Route, Routes } from 'react-router-dom';

import { ContextAPI } from './pages/ContextAPI';
import { Home } from './pages/Home';
import { PropDrilling } from './pages/PropDrilling';
import { ReduxToolkit } from './pages/ReduxToolkit';
import { Zustand } from './pages/Zustand';

import './App.css';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="context-api" element={<ContextAPI />} />
			<Route path="prop-drilling" element={<PropDrilling />} />
			<Route path="redux-toolkit" element={<ReduxToolkit />} />
			<Route path="zustand" element={<Zustand />} />
		</Routes>
	);
}

export default App;
