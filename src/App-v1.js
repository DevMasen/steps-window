import { useState } from 'react';
import './index.css';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

function App() {
	return (
		<div>
			<Steps />
			<Steps />
		</div>
	);
}

function Steps() {
	// const step = 1;

	//! Using states in react
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	//! Handler Functions for click event
	function handlePrevious() {
		//! conditionally updating the state
		if (step > 1) setStep(curStep => curStep - 1);
	}
	function handleNext() {
		if (step < 3) setStep(curStep => curStep + 1);
	}

	return (
		<div>
			{/* event attributes should be in camelcase and a handler function passed to it  */}
			<button
				className="close"
				onClick={() => {
					setIsOpen(curIsOpen => !curIsOpen);
				}}
			>
				&times;
			</button>
			{isOpen && (
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
							style={{
								backgroundColor: '#7950f2',
								color: '#fff',
							}}
							onClick={handlePrevious}
						>
							<span>Previous</span>
						</button>
						<button
							style={{
								backgroundColor: '#7950f2',
								color: '#fff',
							}}
							onClick={handleNext}
						>
							<span>Next</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
