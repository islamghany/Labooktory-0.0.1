import {LOG_IN,LOG_OUT} from '../actions/types';

export default (state={},action)=>{
switch (action.type) {
	case LOG_IN:
		return true;
		break;
	case LOG_OUT:
		return false;
		break;
		default: return state;
}
}