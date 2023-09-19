import { GROUP } from "../util/config";
import { BaseService } from "./BaseService";


export class QuanLyRapService extends BaseService {
    // https://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=BHDStar&maNhom=GP01
    layHeThongRapService = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP}`)
    }
}

export const QLR = new QuanLyRapService()