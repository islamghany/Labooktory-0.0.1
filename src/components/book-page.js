import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions';
import {Rating} from 'semantic-ui-react'

 class BookPage extends React.Component{
     componentDidMount(){
           this.props.fetchBooks();
     }
     renderBook(){
         const item=this.props.books;
         if(item){
            
         return(
            <div class="row">
            <div class="img-logo">
            <div class="icon">
        <img src={item.img} alt="aa" />
        </div>
         <div class="book-info">
          <p><span>Print Length</span>: {item.pages} pages</p>
          <p><span>Language</span>: English</p>
          <p><span>Publication Date</span>: {item.comeout}</p>
          <p><span>ISBN</span>: {item.isbn}</p>
        </div>
        </div>
            <div class="desc">
             <h1 className="product-name">{item.name}</h1> 
             <p className="info" >by {item.author}</p>
                                  <Rating rating={item.rate} maxRating={5} disabled />
             <p className="info" >catigory: {item.type}</p>
             <hr />
             <h4 className="heading-norm">description</h4>
             <p className="info">{item.title}</p>
             <p className="p__details" >{item.des}</p>
             </div>
             <a href={item.download} target="_blank" className="btn btn--outlined-primary">Download Now</a>
          </div>
         )
      
    }
     }
    render(){
        return(
            <div class="book__page">
                <div class="container">
                   {this.renderBook()}
                </div>
            </div>
        )
    }
}
export const mapStateToProps=(state,ownProps)=>{
 return {books:Object.values(state.books)[ownProps.match.params.id-1]};
}
export default connect(mapStateToProps,{fetchBooks})(BookPage);