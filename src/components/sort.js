import React from 'react';
import {connect} from 'react-redux';
import sortContext from '../context/sort-context'
class Sort extends React.Component{
 
    render(){

        return(
            <section className="sort">
                        
               <div className="sort__selects">
               <div className="form__select">
                   <h5 className="heaing-typo">sort by : </h5> 
               
                   <div class="ui form">
                        <div class="field">  
                            <select className="ui select" onChange={this.props.handleChange.bind(this)}>
                             <option value="recent">Newest</option>  
                            <option value="popular">Most Download</option>
                             <option value="top">Most Reviews</option>  
                            </select>
                            </div>
                            </div>
                   </div>           
               </div>
            </section>
        )
    }
}

export default  Sort;