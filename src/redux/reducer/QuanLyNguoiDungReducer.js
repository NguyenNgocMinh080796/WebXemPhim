import { TOKEN, USER_SIGNIN } from "../../util/config"
import { DANG_NHAP } from "../type/QuanLyNguoiDungType"

const initialState = {
    thongTinDangNhap: {},
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            const { thongTinDN } = action
            localStorage.setItem(USER_SIGNIN, JSON.stringify(thongTinDN))
            localStorage.setItem(TOKEN, thongTinDN.accessToken)

            state.thongTinDangNhap = thongTinDN

            return { ...state }
        }
        default:
            return { ...state }
    }
}
