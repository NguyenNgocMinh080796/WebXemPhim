import { QLP } from "../../service/QuanLyPhimService"
import { SET_BANNER, SET_DANH_SACH_PHIM } from "../type/QuanLyPhimType"

export const setBannerAction = () => {
    return dispatch => {
        const promise = QLP.layBannerService()
        promise.then((result) => {
            // console.log('layBannerService', result.data.content)
            dispatch({
                type: SET_BANNER,
                arrBanner: result.data.content
            })
        }).catch((error) => {
            console.log(error.message)
        })
    }
}
export const setDanhSachPhimAction = () => {
    return dispatch => {
        const promise = QLP.layDanhSachPhimService()
        promise.then((result) => {
            // console.log('layDanhSachPhimService', result.data.content)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrPhim: result.data.content
            })
        }).catch((error) => {
            console.log(error.message)
        })
    }
}