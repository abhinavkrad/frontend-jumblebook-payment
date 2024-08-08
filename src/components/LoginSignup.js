import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const LoginSignup = () => {
	const handleClickSignUp = () => {
		document.getElementById('container').classList.add('right-panel-active');
	};

	const handleClickLogin = () => {
		document.getElementById('container').classList.remove('right-panel-active');
	};

	return (
		<div className='container' id='container'>
			<div className='form-container sign-up-container flex-container'>
				<h1>Sign Up</h1>
				<SignUpForm />
			</div>
			<div className='form-container sign-in-container flex-container'>
				<h1>Log In</h1>
				<LoginForm />
			</div>
			<div className='overlay-container'>
				<div className='overlay'>
					<div className='overlay-panel overlay-left'>
						<h1>Welcome Back !</h1>
						<p>
							To keep connected with us please login with your personal info
						</p>
						<button className='ghost' id='signIn' onClick={handleClickLogin}>
							Login
						</button>
					</div>
					<div className='overlay-panel overlay-right'>
						<h1>Hello, Friend !</h1>
						<p>Enter your personal details and start journey with us</p>
						<button className='ghost' id='signUp' onClick={handleClickSignUp}>
							Sign Up
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginSignup;
