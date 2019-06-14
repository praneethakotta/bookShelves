import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'
import {addToCurrentReadingCat, addToWantToReadCat, addToReadCat} from '../ActionCreators'

class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            searchVal: ''
        }
    }
    selectCategory(bookId, event) {
        switch(event.target.innerHTML) {
            case 'Currently Reading':
                this.props.addToCurrentReadingCat({id: bookId})
                break;
             case 'Want to Read':
                 this.props.addToWantToReadCat({id: bookId})
                 break;
             case 'Read':
                 this.props.addToReadCat({id: bookId})
                 break;
             default:
                 break;
        }
    }
    searchBooks(event) {
        let searchVal = event.target.value
        this.setState({
            searchVal
        })
    }
    render() {
        const {searchVal} = this.state
        let searchedBooks = this.props.books.filter(book => book.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
        let searchResultsContainer = searchedBooks.map((book) => {
                                        return(
                                            <BookComponent book={book} key={book.id}/>
                                        )
                                    })
        return(
            
            <div>
                <span style={{float: 'left', cursor: 'pointer', left: '30px', fontSize: '30px', float: 'left', position: 'absolute'}}>
                    <Link to="/"><b>&#8592;</b></Link>
                </span>
                Search Books :  
                <input type="text" className="textbox" value={searchVal} size="10" style={{width: '200px', marginLeft: '10px'}}
                        name="searchVal" onChange={this.searchBooks.bind(this)}/>
                <br /><br />
                <div className="container">
                    <div className="box">   
                        {searchResultsContainer.length > 0 ? searchResultsContainer : <div>No Records Found</div>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCurrentReadingCat: (bookId) => {
            dispatch(addToCurrentReadingCat(bookId))
        },
        addToWantToReadCat: (bookId) => {
            dispatch(addToWantToReadCat(bookId))
        },
        addToReadCat: (bookId) => {
            dispatch(addToReadCat(bookId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);