import React from 'react';
import {fetchBooks} from '../actions';
import {connect} from 'react-redux';
import sortContext from '../context/sort-context';
import ShowBooks from './show-books';
class Books extends React.Component{
   static contextType=sortContext;

    renderBooks=()=>{
        var sortBy =this.props.books;
        var x=this.props.list.search,y=this.props.list.type;
        if(this.props.list.type && this.props.list.search){
            sortBy =sortBy.filter(item =>  item[y].toLowerCase().indexOf(x.toLowerCase()) !== -1);
        }

       else if(!this.props.list.type && this.props.list.search){
        sortBy =sortBy.filter(item =>  item.name.toLowerCase().indexOf(x.toLowerCase()) !== -1);
       }
          
      if(this.props.list.cate && this.props.list.cate!== 'all') {
        sortBy = sortBy.filter(item => item.type ===this.props.list.cate );
      }
          switch (this.context) {
              case'popular':
                  sortBy=sortBy.sort((a,b)=> (a.downloadTime < b.downloadTime) ? 1 : -1);
                  break;
              case'top':
                  sortBy=sortBy.sort((a,b)=> (a.rate < b.rate) ? 1 : -1);
                  break;
              default:
                sortBy =sortBy.reverse();
                  break;
          }

        return ( <div>
         <ShowBooks list={sortBy} auth={this.props.auth} />
            </div>)
     
    }
   
    render(){
        return (
            <section className="book">
             {this.renderBooks()}
            </section>
        )
    }
}




export const mapStateToProps=(state)=>{
  return{books:Object.values(state.books),
        list:state.list,
        auth:state.auth
    } 
}
export default connect(mapStateToProps)(Books);

