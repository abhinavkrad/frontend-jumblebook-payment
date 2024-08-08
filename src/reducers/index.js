import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import deposit from './deposit';
import loader from './loader';
import withdraw from './withdraw';

export default combineReducers({ loader, alert, auth, deposit, withdraw });
