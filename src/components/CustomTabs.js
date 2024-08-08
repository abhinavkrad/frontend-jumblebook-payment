import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const CustomTabs = () => {
	const [activeTab, setActiveTab] = useState('tab1');
	const handleTab1 = () => {
		setActiveTab('tab1');
	};
	const handleTab2 = () => {
		setActiveTab('tab2');
	};
	return (
		<div className='tab-container'>
			<div className='tab-navbar'>
				<div
					className={`tab-navbar-link ${activeTab === 'tab1' && 'active-tab'}`}
					onClick={handleTab1}
				>
					<h2 data-text='Sign Up'>Sign Up</h2>
				</div>
				<div
					className={`tab-navbar-link ${activeTab === 'tab2' && 'active-tab'}`}
					onClick={handleTab2}
				>
					<h2 data-text='Login'>Login</h2>
				</div>
			</div>

			<div className='tab-details'>
				{activeTab === 'tab1' ? <SignUpForm /> : <LoginForm />}
			</div>
		</div>
	);
};
export default CustomTabs;
