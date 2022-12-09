import { useState } from 'react';
import {Link} from "react-router-dom";
export default function Form() {

const [firstname, setFirstname] = useState('');
const [secondname, setSecondname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const handleFirstname = (e) => {
	setFirstname(e.target.value);
	setSubmitted(false);
};

const handleSecondname = (e) => {
	setSecondname(e.target.value);
	setSubmitted(false);
};

const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};


const handleSubmit = (e) => {
	e.preventDefault();
	if (firstname === '' || secondname === '' || email === '' || password === '')
    {
	setError(true);
	}else if(password === RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#])(?=.{8,})")){
        setError(false)
    }else {
	setSubmitted(true);
	setError(false);
	}
};

const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h2>User {firstname} successfully registered!!</h2>
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
		<h2>Please enter all the fields</h2>
	</div>
	);
};

return (
	<div className="form">
      <button to="/login" className='login'>Login</button>
	<div>
		<h1>User Registration</h1>
	</div>

	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

        <label className="label">First Name</label>
		<input onChange={handleFirstname} className="input"
		value={firstname} type="text" />

        <label className="label">Second Name</label>
		<input onChange={handleSecondname} className="input"
		value={secondname} type="text" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
    <a href='#'>forgot password</a>
	</div>
);
}
