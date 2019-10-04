import {combineReducers} from 'redux';
import booksReducer from './books-reducers'
import {reducer as formReducer} from 'redux-form';
import searchReducer from './search-reducers';
import oneReducer from './oneBook-reducer';
import superReducer from './super-reducer';
import authReducer from './auth-reducer';

export default combineReducers({
	auth:authReducer,
    form:formReducer,
    books:booksReducer,
    list:searchReducer,
   oneBook:oneReducer,
    super:superReducer

});