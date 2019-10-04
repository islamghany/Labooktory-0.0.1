import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../actions/index';
class Nabar extends React.Component{
    handleLogOut=()=>{
        this.props.logOut();
    }
    renderIsSigned(){
        if(this.props.auth===true && !this.props.auth.length ) {
            return (
        <React.Fragment>
           <Link to="/book/new" className="btn btn--circled-white"> add new book</Link>
              <Link to="/" className="btn btn--circled-default"  onClick={this.handleLogOut}> Log out</Link>
        </React.Fragment>)
    }
        else return <Link to="/log-in" className="btn btn--circled-white"> Log In</Link>
         

    }
    render(){
            if(!this.props.auth) console.log(true);
        return(
            <nav className="nav">
                <div className="nav__logo">
                   <Link to="/"> <h1 className="heading-logo">labooktory</h1></Link>
                </div>
                <div className="nav__navigaton">
{this.renderIsSigned()}
                </div>
            </nav>
        )
    }
}
const mapStateToProps=(state)=>{
    return{auth : state.auth}
}
export default connect(mapStateToProps,{logOut})(Nabar);