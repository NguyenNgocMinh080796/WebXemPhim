import { QLND } from "../../service/QuanLyNguoiDungService"
import { DANG_NHAP } from "../type/QuanLyNguoiDungType"

export const dangNhapAction = (thongTinDangNhap) => {

    return dispatch => {
        const promise = QLND.dangNhap(thongTinDangNhap)
        promise.then((result) => {
            console.log('result', result)
            dispatch({
                type: DANG_NHAP,
                thongTinDN: result.data.content
            })
        }).catch((error) => {
            console.log(error.message, ', ', error.response.data.content)
        })
    }
}
export const dangKyAction = (thongTinDangKy) => {
    return dispatch => {
        const promise = QLND.dangKy(thongTinDangKy)
        promise.then((result) => {
            console.log('result', result.data.message)
        }).catch((error) => {
            console.log(error.response.data.message)
        })
    }
}