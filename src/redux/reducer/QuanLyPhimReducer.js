import { SET_BANNER, SET_DANH_SACH_PHIM } from "../type/QuanLyPhimType"

const initialState = {
    arrBanner: [],
    arrPhim: [],
}

export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BANNER: {
            state.arrBanner = action.arrBanner
            return { ...state }
        }
        case SET_DANH_SACH_PHIM: {
            state.arrPhim = action.arrPhim
            return { ...state }
        }
        default:
            return { ...state }
    }
}
