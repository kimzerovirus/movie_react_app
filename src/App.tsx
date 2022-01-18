import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';
import SearchPage from './components/SearchPage/SearchPage';

const App: React.FC = () => {
	useEffect(() => {
		const meta = document.createElement('meta');
		const head = document.getElementsByTagName('head');
		if (meta instanceof HTMLMetaElement && head instanceof HTMLHeadElement) {
			meta.name = 'viewport';
			meta.content =
				'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
			head[0].appendChild(meta);
		}
	}, []);

	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/movie/:movieId" element={<DetailPage />} />
					<Route path="/search" element={<SearchPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
