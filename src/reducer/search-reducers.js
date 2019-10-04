import {SEARCH_LIST} from '../actions/types';
import _ from 'lodash'

export default(state={},action)=>{
    switch(action.type){
    case SEARCH_LIST:
    return {...action.payload};
    default:return state;
    }
}