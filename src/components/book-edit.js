import React from 'react';
import {connect} from 'react-redux';
import {editBook,fetchBook} from '../actions/index'
import BookForm from './book-form';
import {Redirect} from 'react-router-dom'

class BookEdit extends React.Component{
    componentDidMount(){
               this.props.fetchBook(this.props.match.params.id);
    }
    onSubmit=(e)=>{
         this.props.editBook(this.props.match.params.id,e);
    }
    render(){
        if(!this.props.one){
        return(
            <div className="head">loading</div>
        )
    }
       else if (this.props.one && this.props.auth){
            return( 
           <div className="head">
            <BookForm  auth={this.props.auth} onSubmit={this.onSubmit} initialValues={this.props.one}  />
            </div>
            )

        }
        else{
            return(
                <Redirect from='/book/update/:id' to='/log-in' />
            )
        }
    }
}
export const mapStateToProps=(state,ownProps)=>{
    return {
        auth:state.auth,
        one:state.oneBook[ownProps.match.params.id]
    };
}
export default connect(mapStateToProps,{editBook,fetchBook})(BookEdit);