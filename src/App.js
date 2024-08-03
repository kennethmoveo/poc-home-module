import logo from "./logo.svg";
import "./App.css";
import { Button } from "poc-shared-components-module";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<div>
				<Button label="Hola" />
			</div>
		</div>
	);
}

export default App;
