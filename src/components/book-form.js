import React from 'react';
import {reduxForm,Field} from 'redux-form';
import {Spring} from 'react-spring/renderprops';    
import {Redirect} from 'react-router-dom'
const required = value => value ? undefined : 'this field is empty';


class BookForm extends React.Component{
  
    renderInput=({ input,label,meta:{touched,error,warning}})=>{
        return(
            <div className="field">
            <label>{label}</label>
            <input {...input} type="text"  placeholder={label} autoComplete="off" />
            {touched && ((error &&  <div className="ui error">
                <div className="header">{error}</div>
            </div>) || (warning && <div className="ui error">
                <div className="header">{warning}</div>
            </div>))}
            </div> 
        )
    }
    renderText=({input, label ,meta: { touched, error, warning }})=>{
        return(
            <div className="field">
            <label>{label}</label>
            <textarea {...input} row="4">
            </textarea>
           {touched && ((error &&  <div className="ui error">
                <div className="header">{error}</div>
            </div>) || (warning && <div className="ui error">
                <div className="header">{warning}</div>
            </div>))}
            
            </div> 
        )
    }
    onSubmit=(e)=>{
        this.props.onSubmit(e);
    }
    

    render(){

        if(this.props.auth===true){
               return(
            <Spring from={{ opacity: 0}}
            to={{ opacity: 1}} 
            config={{delay:0,duration:500}}
    >
     {props=>(
                    <div style={props}>
            <div className="form__container">
            <form class="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:500,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="name" component={this.renderInput } label="Book Name" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:650,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="author" component={this.renderInput } label="Book Auther" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:800,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="pages" component={this.renderInput } label="Book Pages" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:950,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="comeout" component={this.renderInput } label="Book Comeout" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:1050,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="rate" component={this.renderInput } label="Book Rating" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:1200,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="isbn" component={this.renderInput } label="Book ISBN" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:1350,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="title" component={this.renderInput } label="Book Title" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:1500,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="download" component={this.renderInput } label="Book URL" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:1650,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <Field name="img" component={this.renderInput } label="Book Image URL" validate={[ required ]} />
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:1700,duration:250}}
            >
                {props=>(
                    <div style={props}>
            <div class="field">
            <label>Choose a Catigory</label>
            <div class="ui form">
                        <div class="field">  
                         <Field name="type" component="select"  >
                                 <option value="Arts & Photography">Arts & Photography</option>
                                 <option value="Biographies & Memoirs">Biographies & Memoirs</option>
                                 <option value="Computer Sience" >Computer Sience</option>
                                  <option value="History" >History</option>
                                   <option value="Literature & Fiction" >Literature & Fiction</option>
                                 
                                 </Field>
                            
                          
                            </div>
             </div>
            </div> 
            </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:1850,duration:250}}
            >
                {props=>(
                    <div style={props}>
                <Field name="des" component={this.renderText} label="Book Description" validate={[ required ]} />
                </div>
            )}
            </Spring>
            <Spring from={{ marginLeft: -20, opacity: 0, transform: 'translate3d(0,-40px,0)'}}
                    to={{marginLeft: 0, opacity: 1, transform: 'translate3d(0,0px,0)'}} 
                    config={{delay:2000,duration:250}}
            >
                {props=>(
                    <div style={props}>
           <div class="text-center"> <button class="btn btn--contained-primary" >Submit</button></div>
           </div>
            )}
            </Spring>
            </form>
            </div>
            </div>
            )}
            </Spring>
        )
    }
    else {
        return( 
            <Redirect from='/book/new' to='/log-in' />
    )
    }
    }
}

export default reduxForm({
    form:'sreamForm',
    destroyOnUnmount: false
   })(BookForm);