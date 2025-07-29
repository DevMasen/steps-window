import { useState } from 'react';
import './index.css';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

function App() {
	// const step = 1;

	//! Using states in react
	let [step, setStep] = useState(1);

	//! Handler Functions for click event
	function handlePrevious() {
		//! conditionally updating the state
		if (step > 1) setStep(step - 1);
	}
	function handleNext() {
		if (step < 3) setStep(step + 1);
	}
	function handleClose() {
		alert('close');
	}

	return (
		<>
			{/* event attributes should be in camelcase and a handler function passed to it  */}
			<div className="close" onClick={handleClose}>
				&#10006;
			</div>
			<div className="steps">
				<div className="numbers">
					<div className={step >= 1 ? 'active' : ''}>1</div>
					<div className={step >= 2 ? 'active' : ''}>2</div>
					<div className={step >= 3 ? 'active' : ''}>3</div>
				</div>
				<p className="message">
					Step {step}: {messages[step - 1]}
				</p>

				<div className="buttons">
					<button
						style={{ backgroundColor: '#7950f2', color: '#fff' }}
						onClick={handlePrevious}
					>
						<span>Previous</span>
					</button>
					<button
						style={{ backgroundColor: '#7950f2', color: '#fff' }}
						onClick={handleNext}
					>
						<span>Next</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
