import React from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux'
import {fetchSuper,logIn} from '../actions/index';
import history from '../history';

const required = value => value ? undefined : 'this field is empty';

class LogIn extends React.Component{
state={err:''}
componentDidMount(){
	this.props.fetchSuper();
}

renderInput=({input,label,type,meta})=>{
	var x;
     if(meta.error && meta.touched) x='red';
     else x=' #15038C';
	return (<div class="form__unit">
       <label for={type} class="form__label">{label}</label>
       <input {...input} class="form__input-main" style={{border:`1px solid ${x}`}} id={type} autocomplete="off" type={type} placeholder={`Enter ${label}.`} />
    </div>)
}
onSubmit=(e)=>{
   if(e.username === this.props.super.username  && e.password === this.props.super.password) {
        this.props.logIn();
        this.setState({err:''});
        history.push('/');  

   }
   else{this.setState({err:'Username or psssword is wrong'});}

}
   
render(){
  
 if(this.props.auth===true){
 	return( <div className="head">
     <h1 className="heading-primary">you already logged in..</h1>
 	</div>
 	)
 }
 else{
	return(
		<div class="head">
              <div class="form">
<div class="form__container">
  <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
    <Field name="username" component={this.renderInput}  label="Username" type="text" validate={[ required]} />
      <Field name="password" component={this.renderInput}  label="Password" type="password"  validate={[ required]} />
    <button class="btn btn--contained-primary" >Submit</button>
  </form>
  <p className="sale">{this.state.err}</p>
  </div>
</div>	
		</div>
		)
	}
}
}

const mapStateToProps=(state)=>{
return{super:  Object.values(state.super)[0],
       auth:state.auth
}
}

const wrap=reduxForm({form:'sreamform'})(LogIn);
export default connect(mapStateToProps,{fetchSuper,logIn})(wrap) ;