import {ADD_TO_CR, ADD_TO_WTR, ADD_TO_READ} from './Actions'

export const addToCurrentReadingCat = (payload) => {
    return {
        type: ADD_TO_CR,
        payload
    }
}

export const addToWantToReadCat = (payload) => {
    return {
        type: ADD_TO_WTR,
        payload
    }
}

export const addToReadCat = (payload) => {
    return {
        type: ADD_TO_READ,
        payload
    }
}

