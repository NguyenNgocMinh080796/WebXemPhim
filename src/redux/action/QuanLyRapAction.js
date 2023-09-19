import { QLR } from '../../service/QuanLyRapService'
import { SET_HE_THONG_RAP } from '../type/QuanLyRapType'

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