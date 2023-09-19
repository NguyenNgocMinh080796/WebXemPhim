import Axios from 'axios'
import { DOMAIN_WEB_PHIM } from '../util/config'

export class BaseService {
    get = (url) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'GET'
        })
    }
    delete = (url) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'DELETE'
        })
    }
    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'POST',
            data: model,
        })
    }
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'PUT',
            data: model,
        })
    }
}