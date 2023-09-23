import { BaseService } from './BaseService'

export class QuanLyNguoiDungService extends BaseService {
    // constructor() {
    //     super()
    // }
    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
    }
}

export const QLND = new QuanLyNguoiDungService()