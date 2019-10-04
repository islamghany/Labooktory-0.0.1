import {FETCH_BOOKS,FETCH_BOOK,FETCH_NEW,FETCH_EDIT,FETCH_DELETE,SEARCH_LIST,SORT_SELECT,FETCH_SUPER,LOG_IN,LOG_OUT} from './types';
import Books from '../api/books';
import history from '../history'




export const list=(data)=>{
    return{
        type:SEARCH_LIST,
        payload:data
    }
}
export const sortSelect=(data='popular')=>{
    return{
        type:SORT_SELECT,
        payload:data
    }
}
export const logIn=()=>{
    return{
        type:LOG_IN,
        payload:{}
    }
      history.push('/')
}
export const logOut=()=>{
    return{
        type:LOG_OUT,
        payload:{}
    }
}



export const fetchSuper=()=>async dispatch =>{
    const respond = await Books.get('/super');
    dispatch({type:FETCH_SUPER , payload:respond.data});
}

export const fetchBooks=()=>async dispatch=>{
    const respond = await Books.get('/books');
    dispatch({type:FETCH_BOOKS , payload:respond.data});
};
export const fetchBook=(id)=>async dispatch=>{
    const respond = await Books.get(`/books/${id}`);
    dispatch({type:FETCH_BOOK , payload:respond.data});
};
export const addBook=(book)=> async dispatch =>{
    const respond = await Books.post('/books',book);
    dispatch({type:FETCH_NEW, payload:respond.data});
    history.push('/')
}
export const editBook=(id,bookData)=>async dispatch=>{
    const respond =await Books.patch(`/books/${id}`,bookData);
    dispatch({type:FETCH_EDIT, payload:respond.data});
    history.push('/')
}
export const deleteBook=(id)=>async dispatch=>{
    const respond = await Books.delete(`books/${id}`);
    dispatch({type:FETCH_DELETE , payload :id});
    history.push('/');
}