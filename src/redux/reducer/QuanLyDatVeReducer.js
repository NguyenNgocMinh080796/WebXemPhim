import { CHI_TIET_PHONG_VE, DAT_GHE } from "../type/QuanLyDatVeType"

const initialState = {
    chiTietPhongVe: {},
    danhSachGheDangDat: [],
}

export const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }

        case DAT_GHE: {
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)

            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon)
            }

            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }

        default:
            return { ...state }
    }
}
