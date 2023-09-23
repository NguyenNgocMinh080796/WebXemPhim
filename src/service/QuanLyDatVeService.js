import { BaseService } from './BaseService'

export class QuanLyDatVeService extends BaseService {
    // constructor() {
    //     super()
    // }
    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe = (thongTinDatVe) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }
}

export const QLDV = new QuanLyDatVeService()