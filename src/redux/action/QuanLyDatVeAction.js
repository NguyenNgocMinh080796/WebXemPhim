import { QLDV } from "../../service/QuanLyDatVeService"
import { CHI_TIET_PHONG_VE } from "../type/QuanLyDatVeType"

export const chiTietPhongVeAction = (maLichChieu) => {
    return dispatch => {
        const promise = QLDV.layChiTietPhongVe(maLichChieu)
        promise.then((result) => {
            // console.log('layChiTietPhongVe', result.data.content)
            dispatch({
                type: CHI_TIET_PHONG_VE,
                chiTietPhongVe: result.data.content
            })
        }).catch((error) => {
            console.log(error.message)
        })
    }
}
export const datVeAction = (thongTinDatVe) => {
    return dispatch => {
        const promise = QLDV.datVe(thongTinDatVe)
        promise.then((result) => {
            console.log('resul', result)
        }).catch((error) => {
            console.log('error', error)
        })
    }
}