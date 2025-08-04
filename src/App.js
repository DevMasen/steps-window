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
					{/* <p className="message">
						Step {step}: {messages[step - 1]}
					</p> */}
					<StepMessage step={step}>
						<div className="buttons">
							<Button
								bgColor="#ccc"
								textColor="#000"
								onClick={() => alert('Link Clicked!')}
							>
								{' '}
								Learn More
							</Button>
						</div>
					</StepMessage>

					<div className="buttons">
						<Button
							bgColor="#7950f2"
							textColor="#fff"
							onClick={handlePrevious}
						>
							{' '}
							<span>👈</span> Previous{' '}
						</Button>
						<Button
							bgColor="#7950f2"
							textColor="#fff"
							onClick={handleNext}
						>
							{' '}
							Next <span>👉</span>
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

function Button({ bgColor, textColor, onClick, children }) {
	return (
		<button
			style={{ backgroundColor: bgColor, color: textColor }}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

function StepMessage({ step, children }) {
	return (
		<div className="message">
			<h3>Step {step}</h3>
			<p>{messages[step - 1]}</p>
			{children}
		</div>
	);
}
export default App;
