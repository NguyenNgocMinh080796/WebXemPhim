import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyPhimReducer } from './reducer/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducer/QuanLyRapReducer'
import { QuanLyNguoiDungReducer } from './reducer/QuanLyNguoiDungReducer'
import { QuanLyDatVeReducer } from './reducer/QuanLyDatVeReducer'

const rootReducer = combineReducers({
    QuanLyPhimReducer: QuanLyPhimReducer,
    QuanLyRapReducer: QuanLyRapReducer,
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
    QuanLyDatVeReducer: QuanLyDatVeReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))