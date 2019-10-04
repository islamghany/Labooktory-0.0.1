import React from 'react';
import '../sass/style.scss';
import {Router, Route,Switch} from 'react-router-dom';
import Navbar from './navbar'
import Main from './main';
import BookPage from './book-page';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions';
import BookCreate from './book-create';
import BookEdit from './book-edit';
import history from "../history";
import DeleteBook from './book-delete';
import LogIn from './login';
import superContext from '../context/super-context';

class App extends React.Component{
state={isSigned:false}

    componentDidMount(){
          this.props.fetchBooks();
    }
    handleSigned=(flag)=>{
       this.srtState({
        isSigned:flag
       })
    }
    render(){
        return(
           <div className="main">
    
            <Router history={history}>
            <superContext.Provider value={this.state.isSigned}>
              <Navbar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/book/new" exact component={BookCreate} />
                    <Route path="/book/update/:id" exact component={BookEdit} />
                    <Route path="/book/:id" exact component={BookPage} />
                    <Route path="/book/delete/:id" exact component={DeleteBook} />
                    <Route path="/log-in" exact component={LogIn} />
                 </Switch>   
            </superContext .Provider >
            </Router>
            </div>
        )
    }
}
export default connect(null,{fetchBooks})(App);