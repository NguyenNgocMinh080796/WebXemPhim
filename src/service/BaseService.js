import Axios from 'axios'
import { DOMAIN_WEB_PHIM, TOKEN } from '../util/config'

export class BaseService {
    get = (url) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
    delete = (url) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_WEB_PHIM}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
}