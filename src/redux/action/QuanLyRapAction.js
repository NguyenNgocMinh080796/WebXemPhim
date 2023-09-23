import { QLR } from '../../service/QuanLyRapService'
import { SET_FILM_DETAL, SET_HE_THONG_RAP } from '../type/QuanLyRapType'

export const setHeThongRapAction = () => {
    return dispatch => {
        const promise = QLR.layHeThongRapService()
        promise.then((result) => {
            // console.log('layHeThongRapService', result.data.content)
            dispatch({
                type: SET_HE_THONG_RAP,
                heThongRap: result.data.content
            })
        }).catch((error) => {
            console.log(error.message)
        })
    }
}
export const setFilmDetailAction = (maPhim) => {
    return dispatch => {
        const promise = QLR.layThongTinLichChieuPhim(maPhim)
        promise.then((result) => {
            // console.log('layHeThongRapService', result.data.content)
            dispatch({
                type: SET_FILM_DETAL,
                filmDetail: result.data.content
            })
        }).catch((error) => {
            console.log(error.message)
        })
    }
}