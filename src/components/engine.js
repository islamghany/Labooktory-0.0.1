import React from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import {list} from '../actions/index';
import {Spring} from 'react-spring/renderprops';    



const required = value => value ? undefined : 'this field is empty';

class Engine extends React.Component{
    state={is:''};

  
    renderInput=({ input,label,meta})=>{
        return(
            <input  {...input} className="form__input"  type="text" placeholder="Search on a book.."  />
        )
    }
  
   onSubmit=(e)=>{
      this.props.list(e);
      
   }
    render(){
        
        return(
          
                 <section class="wrapper">
                 <div className="cover" >
                 <Spring from={{opacity:0}}
                    to={{opacity:1}} 
                    config={{delay:1000,duration:1000}}
            >
                {props=>(
                    <div style={props} className="block">
                 <div class="engine">
               
                     <div className="form__group">
                      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                          <div className="form__select">
                     
                        <div class="ui form">
                             <div class="field">  
                             <Field name="type" component="select" value="name" >
                                 <option value="name">Name</option>
                                 <option value="author">Author</option>
                                 <option value="isbn" >ISBN</option>
                                 
                                 </Field>
                                 </div>
                                 </div>

                                     <div class="ui form ml">
                                 
                                
                             <div class="field">  
                             <Field name="cate" component="select"  >
                                <option value="all">All Categories</option>
                                 <option value="Arts & Photography">Arts & Photography</option>
                                 <option value="Biographies & Memoirs">Biographies & Memoirs</option>
                                 <option value="Computer Sience" >Computer Sience</option>
                                                                   <option value="History" >History</option>
  <option value="Literature & Fiction" >Literature & Fiction</option>
                                 
                                 </Field>
                                 </div>
                                 </div>
                        </div>
                        <div className="form__main">
                        <Field name="search" component={this.renderInput} validate={[ required ]} />
                        <button className="btn btn--contained-primary">Go</button>
                        </div>
                     </form>
                     </div>
                
                 </div>
                 </div>
                )}
           </Spring>
                 </div>
             </section>
        
            
        )
    }
}
const wrap = reduxForm({form:'sreamForm' })(Engine);
const mapStateToProps=(state)=>{
return {books:Object.values(state.books)}
}
export default connect(mapStateToProps,{list})(wrap);