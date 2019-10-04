import React from 'react';
import ReactDom from 'react-dom';
import history from '../history';
import {Link} from 'react-router-dom';

const Model = (props)=>{
    return ReactDom.createPortal(
        <div className="ui dimmer modals visible active" onClick={()=>{history.push('/')}} >
          <div  onClick={(e)=>{e.stopPropagation()}} className="ui standard modal visible active" >
            <div className="header" >Delete Book with Name {props.name}</div>
            <div className="content" >Are you sure you want to delete this post</div>
            <div className="actions" >
            <button onClick={props.deletebook} className="btn btn--contained-primary" >Delete </button>
            <Link to='/' className="btn btn--contained-default"  >Cancel </Link>
            </div>
          </div>
        </div>,
         document.querySelector('#model')
    );
};
export default Model;