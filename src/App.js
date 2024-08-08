import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.js';
import Alert from './components/Alert.js';
import PrivateRoute from './components/PrivateRoute.js';
import PaymentPage from './pages/PaymentPage';
import WithdrawalPage from './pages/WithdrawalPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import ConfirmPage from './pages/ConfirmPage';
import { Provider } from 'react-redux';
import store from './store';
import SignUpLoginPage from './pages/SignUpLoginPage.js';

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<BrowserRouter>
					<Alert />
					<Loader />
					<Routes>
						<Route exact path='/' element={<PaymentPage />}></Route>
						<Route
							exact
							path='/withdraw'
							element={
								<PrivateRoute>
									<WithdrawalPage />
								</PrivateRoute>
							}
						></Route>
						<Route
							exact
							path='/change-password'
							element={<ChangePasswordPage />}
						></Route>
						<Route
							exact
							path='/confirm-payment'
							element={
								<PrivateRoute depositRoute>
									<ConfirmPage />
								</PrivateRoute>
							}
						></Route>
						<Route
							exact
							path='/signup-login'
							element={<SignUpLoginPage />}
						></Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
