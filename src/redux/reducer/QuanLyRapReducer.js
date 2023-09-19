import { SET_HE_THONG_RAP } from "../type/QuanLyRapType"

const initialState = {
    heThongRap: []
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP: {
            state.heThongRap = action.heThongRap
            return { ...state }
        }

        default:
            return { ...state }
    }
}
