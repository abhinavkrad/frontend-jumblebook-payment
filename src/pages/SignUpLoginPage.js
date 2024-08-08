import CustomTabs from '../components/CustomTabs';
import LoginSignup from '../components/LoginSignup';
import LoginSignUpMobile from '../components/LoginSignUpMobile';

const SignUpLoginPage = () => {
	return (
		<div className='login-form-container flex-container'>
			{/* <CustomTabs /> */}
			<div className='desktop-form'>
				<LoginSignup />
			</div>
			<div className='mobile-form'>
				<LoginSignUpMobile />
			</div>
		</div>
	);
};

export default SignUpLoginPage;
