import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent'

class BooksListComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let categorisedBooks = this.props.books.reduce((catObj, book) => {
            (catObj[book.category] = catObj[book.category] || []).push(book);
            return catObj;
        }, {});

        let categorisedList = Object.keys(categorisedBooks).map((cat, index) => (
            <div key={index}>
                <h3 style={{float: 'left'}}>{cat}</h3>
                <div style={{display: 'inline-flex', flexFlow: 'wrap', justifyContent: 'space-between'}}>
                    {categorisedBooks[cat].map(book => (
                        <BookComponent book={book} key={book.id}/>
                    ))}
                </div>
                <hr />
            </div>
        ))

        return(
            <div>
                <div style={{fontSize: '20px', marginRight: '50px', float: 'right'}}>
                    <Link to="/search">Search</Link>
                </div>
                <div className="container">
                    <div className="box">
                        {categorisedList}
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

export default connect(mapStateToProps)(BooksListComponent)