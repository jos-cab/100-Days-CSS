import "./App.css";

function App() {
	const Challenge = ({ index }) => {
		return (
			<a
				className="card"
				href={`./Challenges/${(index + 1)
					.toString()
					.padStart(3, "0")}/index.html`}
			>
				<img
					src={`/${(index + 1).toString().padStart(3, "0")}.png`}
					alt={""}
				/>
				<span>{(index + 1).toString().padStart(3, "0")}</span>
			</a>
		);
	};

	const challengesList = Array.from({ length: 100 }, (_, i) => (
		<Challenge key={i} index={i} />
	));

	return (
		<>
			<h1 className="title">100 Days CSS</h1>
			<div className="container">{challengesList}</div>
		</>
	);
}

export default App;
