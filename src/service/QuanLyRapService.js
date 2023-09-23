import { GROUP } from "../util/config";
import { BaseService } from "./BaseService";


export class QuanLyRapService extends BaseService {
    layHeThongRapService = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`)
    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
}

export const QLR = new QuanLyRapService()