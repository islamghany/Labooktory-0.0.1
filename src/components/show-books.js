import React from 'react';
import {Link} from 'react-router-dom';
import {Rating} from 'semantic-ui-react'

const ShowBooks =(props)=>{


          return props.list.map(item=>{
            return(
                <div class="book__card" key={item.id}>
                <div class="book__cover">
                <Link to={`/book/${item.id}`}>      <div className="img"
                    style={{
                        height:'100%',
                        backgroundImage:`url('${item.img}')`,
                        backgroundSize:'cover'
                    }}
                    ></div> </Link>
                </div>
                <div class="book__info"> 
                    <h1 class="name">{item.name}</h1>
                    <p class="author">by {item.author}</p>                     
                     <Rating rating={item.rate} maxRating={5} disabled />
                    <p className="comeout" >publich in {item.comeout}</p>
                    <p className="type" >category: {item.type}</p>
                    <p className="type" >number of pages: {item.pages} </p>
                    <Link to={`/book/${item.id}`} className="btn btn--outlined-primary btn--abs">Download Now</Link>
                    {
                      props.auth===true ?  
                    <div className="absolute"> <div className="relative">  <button  class="btn btn--circled-menu ">
                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                    <div className="dropdown">
                    <ul>
                        <li><Link className="Link" to={`/book/update/${item.id}`}>Update Book</Link></li>
                        <li><Link   className="Link" to={`/book/delete/${item.id}`}>delete Book</Link></li>
                    </ul>
                    </div>
                    </button>
                     </div>
                     </div>
                     :
                     null
                 }
                    
                </div>
            </div>
            )
        })
      
}

export default ShowBooks;