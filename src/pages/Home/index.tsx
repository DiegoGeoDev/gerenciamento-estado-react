import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<main className="home-main">
			<section className="home-section">
				<Link to="prop-drilling">Prop Drilling</Link>
				<Link to="context-api">Context API</Link>
				<Link to="redux-toolkit">Redux Toolkit</Link>
				<Link to="zustand">Zustand ❤️</Link>
			</section>
		</main>
	);
};
