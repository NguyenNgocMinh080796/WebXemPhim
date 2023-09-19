import { GROUP } from '../util/config'
import { BaseService } from './BaseService'

export class QuanLyPhimService extends BaseService {
    // constructor() {
    //     super()
    // }

    layBannerService = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }

    layDanhSachPhimService = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`)
    }
}

export const QLP = new QuanLyPhimService()