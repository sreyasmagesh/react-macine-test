import { useState } from 'react';

export default function Loginform() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h2>User  successfully registered!!</h2>
	</div>
	);
};

const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h2>invalid email or password</h2>
	</div>
	);
};

return (
	<div className="form">
      <button className='login'>Sign up</button>
	<div>
		<h1>User Sign in</h1>
	</div>
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>

		<label className="label">Email</label>
		<input className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input className="input"
		value={password} type="password" />
		<button className="btn" type="submit">
		Login
		</button>
	</form>
	</div>
);
}
