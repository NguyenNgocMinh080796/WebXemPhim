import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyPhimReducer } from './reducer/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducer/QuanLyRapReducer'

const rootReducer = combineReducers({
    QuanLyPhimReducer: QuanLyPhimReducer,
    QuanLyRapReducer: QuanLyRapReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))