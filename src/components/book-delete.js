import React from 'react';
import Model from './model';
import {deleteBook} from '../actions/index';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
class DeleteBook extends React.Component{
    deletebook=()=>{
        this.props.deleteBook(this.props.match.params.id);
    }
    render(){
        if(!this.props.book){
            return<div>StreamDelete</div>
            
            }
       else{
if(this.props.auth === true){
           return(
            <div>StreamDelete
            <Model name={this.props.book.name} deletebook={this.deletebook}/>
         </div>
           )
         }
           else {
        return(  <Redirect from='/book/delete' to='/log-in' />
    )
    }
       }     
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{book:Object.values(state.books)[ownProps.match.params.id-1],
      auth:state.auth

    }
}
export default connect(mapStateToProps,{deleteBook})(DeleteBook);