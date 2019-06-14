import {ADD_TO_CR, ADD_TO_WTR, ADD_TO_READ} from './Actions'
import Item1 from './images/item1.jpg'
import Item2 from '././images/item2.png'
import Item3 from '././images/item3.jpg'
import Item4 from '././images/item4.jpg'
import Item5 from '././images/item5.jpg'

const initialState = {
    books: [
        {id: 1, name: 'enders game1', category: 'Currently Reading', image: Item1},
        {id: 2, name: 'game2', category: 'Want to Read', image: Item2},
        {id: 3, name: 'enders game3', category: 'Currently Reading', image: Item3},
        {id: 4, name: 'fitness1', category: 'Want to Read', image: Item4},
        {id: 5, name: 'enders4', category: 'Currently Reading', image: Item5},
        {id: 6, name: 'enders5', category: 'Want to Read', image: Item2},
        {id: 7, name: 'enders game4', category: 'Currently Reading', image: Item1},
        {id: 8, name: 'enders fitness3', category: 'Want to Read', image: Item2},
        {id: 9, name: 'xyz', category: 'Currently Reading', image: Item3},
        {id: 10, name: 'abc', category: 'Want to Read', image: Item4},
        {id: 11, name: 'end', category: 'Read', image: Item5},
        {id: 12, name: 'enders game abc xyz', category: 'Read', image: Item1},
        {id: 13, name: 'abc 2', category: 'Want to Read', image: Item2},
        {id: 14, name: 'enders12', category: 'Read', image: Item2},
        {id: 15, name: 'enders game 50', category: 'Read', image: Item3},
        {id: 16, name: 'ender', category: 'Currently Reading', image: Item5},
        {id: 17, name: 'endegame', category: 'Want to Read', image: Item4},
        {id: 18, name: 'xyzzz', category: 'Read', image: Item2},
        {id: 19, name: 'end 2 1', category: 'Read', image: Item3},
        {id: 20, name: 'game 4', category: 'Read', image: Item1}
    ]
}

const BooksReducer = (state = initialState, action) => {
    if(action.type === ADD_TO_CR) {
        let temp = {...state}
        let selectedBook = temp.books.find((book) => book.id === action.payload.id)
        selectedBook.category = 'Currently Reading'
        return JSON.parse(JSON.stringify({...temp}))
    }
    if(action.type === ADD_TO_READ) {
        let temp = {...state}
        let selectedBook = temp.books.find((book) => book.id === action.payload.id)
        selectedBook.category = 'Read'
        return JSON.parse(JSON.stringify({...temp}))
    }
    if(action.type === ADD_TO_WTR) {
        let temp = {...state}
        let selectedBook = temp.books.find((book) => book.id === action.payload.id)
        selectedBook.category = 'Want to Read'
        return JSON.parse(JSON.stringify({...temp}))
    }
    return state;
}

export default BooksReducer;