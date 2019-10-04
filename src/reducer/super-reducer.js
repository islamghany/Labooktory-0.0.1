import {FETCH_SUPER} from '../actions/types';
import _ from 'lodash'

export default (state={},action)=>{
switch (action.type) {
	case FETCH_SUPER:
        return{...state, ..._.mapKeys(action.payload , 'id')};
		break;
	default:
		return state;
		break;
}
}