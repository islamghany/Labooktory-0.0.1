import {FETCH_BOOKS,FETCH_BOOK,FETCH_NEW,FETCH_EDIT,FETCH_DELETE} from '../actions/types';
import _ from 'lodash'
export default (state={},action)=>{
    switch(action.type){
        case FETCH_BOOKS:
        return{...state, ..._.mapKeys(action.payload , 'id')};
        case FETCH_NEW:
        return {...state , [action.payload.id] : action.payload};
        case FETCH_EDIT:
        return {...state,[action.payload.id] : action.payload}; 
        case FETCH_DELETE:
        return _.omit(state , action.payload); 
        default: return state;  
    }
}