import React from 'react';
import BookForm from './book-form';
import {connect} from 'react-redux';
import {addBook} from '../actions'
class BookCreate extends React.Component{
    onSumbit=(e)=>{
     this.props.addBook(e);

    }
    render(){
        return(
            <div className="head">
            <BookForm onSubmit={this.onSumbit}  auth={this.props.auth}  />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {auth:state.auth}
}
export default connect(mapStateToProps,{addBook})(BookCreate);