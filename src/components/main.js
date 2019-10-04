import React from 'react';
import Engine from './engine';
import Sort from './sort';
import Books from './books';
import {Spring} from 'react-spring/renderprops';    
import sortContext from '../context/sort-context';

class Main extends React.Component{
   state={sortby:'recent'}
   handleChange=(e)=> {
   this.setState({
        sortby :e.target.value
   })
   
}
    render(){
        return(
            <div>
            <div className="u-margin-bottom-medium head">
        
            <Spring from={{opacity:0}}
                    to={{opacity:1}} 
            >
                {props=>(
                    <div style={props}>
           <Engine />
           <Sort handleChange={this.handleChange} />
           </div>
                )}
           </Spring>
        
           </div>
           <sortContext.Provider value={this.state.sortby} >
            <Books />
             </sortContext.Provider>
            </div>
        )
    }
}
export default Main;