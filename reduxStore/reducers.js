import { GET_USER_INFO } from './types'


const initialData = {
    userName: ''
}

export const userReducer = (state = initialData, action) => {
    switch (action.type) {
        case GET_USER_INFO: return { ...state, userName: action.payload };
        default: return { ...state }
    }
}