import { SET_FILM_DETAL, SET_HE_THONG_RAP } from "../type/QuanLyRapType"

const initialState = {
    heThongRap: [],
    filmDetail: [],
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP: {
            state.heThongRap = action.heThongRap
            return { ...state }
        }
        case SET_FILM_DETAL: {
            state.filmDetail = action.filmDetail
            return { ...state }
        }
        default:
            return { ...state }
    }
}
