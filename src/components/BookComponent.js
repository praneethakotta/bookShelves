import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addToCurrentReadingCat, addToWantToReadCat, addToReadCat} from '../ActionCreators'

class BookComponent extends Component {
    constructor(props) {
        super(props)
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

    render() {
        let {book} = this.props
        return(
            <div className="card" key={book.id}>
                <div className="card-image">
                    <img src={book.image} alt={book.name}/>
                    <span className="card-title">{book.name}</span>
                    <div className="dropdown">
                        <span style={styles.caretStyle} className="btn-floating halfway-fab waves-effect waves-light red dropdown-toggle"
                        id="menu1" data-toggle="dropdown">>
                        </span>
                        <ul className="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="menu1"
                        style={{top: '-42px', right: '-118px', cursor: 'pointer'}}>
                            <li role="presentation" className="dropdown-header">
                                <a role="menuitem">Move to...</a>
                            </li>
                            <li role="presentation" onClick={this.selectCategory.bind(this, book.id)}><a role="menuitem">
                                {book.category === 'Currently Reading'? <span>&#10004;</span> : ''}Currently Reading</a></li>   
                            <li role="presentation" onClick={this.selectCategory.bind(this, book.id)}><a role="menuitem">
                                {book.category === 'Want to Read'? <span>&#10004;</span> : ''}Want to Read</a></li>   
                            <li role="presentation" onClick={this.selectCategory.bind(this, book.id)}><a role="menuitem">
                                {book.category === 'Read'? <span>&#10004;</span> : ''}Read</a></li> 
                            <li role="presentation"><a role="menuitem">
                                None</a></li>   
                        </ul>
                    </div>
                </div>
            </div>
        )
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
const styles = {
    caretStyle: {
        width: '30px',
        right: '24px',
        bottom: '25px',
        height: '30px'
    }
}

export default connect(null, mapDispatchToProps)(BookComponent)