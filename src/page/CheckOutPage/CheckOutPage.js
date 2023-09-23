import React, { Fragment, useEffect } from 'react'
import './CheckOutPage.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Col, Divider, Image, Row, Space, Typography } from 'antd'
import { chiTietPhongVeAction, datVeAction } from '../../redux/action/QuanLyDatVeAction'
import { CloseSquareOutlined } from '@ant-design/icons';
import { DAT_GHE } from '../../redux/type/QuanLyDatVeType'

const { Text } = Typography

export default function CheckOutPage() {
    const dispatch = useDispatch()
    const param = useParams()

    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    useEffect(() => {
        dispatch(chiTietPhongVeAction(param.id))
    }, [])


    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = ''

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)

            if (indexGheDD !== -1) {
                classGheDaDat = 'gheDangDat'
            }

            return <>
                <button
                    key={index}
                    disabled={ghe.daDat}
                    className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                    onClick={() => { handleDatGhe(ghe) }}
                >

                    {ghe.daDat ? <CloseSquareOutlined /> : ghe.stt}

                </button >

                {(index + 1) % 16 === 0 ? <br /> : ''}
            </>
        })
    }

    const handleDatGhe = (ghe) => {
        return dispatch({
            type: DAT_GHE,
            gheDuocChon: ghe
        })
    }

    return (
        <div style={{ padding: '100px 50px 50px 50px' }}>
            <Row gutter={16}>
                <Col span={16}>
                    <Card
                        title={<Divider><Text strong>DANH SÁCH GHẾ</Text></Divider>}
                    >
                        <Button style={{ width: '100%' }} type='primary' ghost>Màn hình</Button>
                        <hr />
                        <br />

                        {renderGhe()}

                        <br />

                        <Space direction='horizontal'>
                            <button className='ghe' /><span>Thường</span>
                            <button className='ghe gheVip' /><span>VIP</span>
                            <button className='ghe gheDaDat' /><span>Đã được đặt</span>
                            <button className='ghe gheDangDat' /><span>Đang được đặt</span>
                        </Space>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title={<Divider><Text strong>THÔNG TIN PHIM</Text></Divider>}
                    >
                        <Space size='large' direction='vertical'>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Text strong>Tên phim:</Text>
                                </Col>
                                <Col span={16}>
                                    <Text>{thongTinPhim?.tenPhim}</Text>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Text strong>Ngày chiếu:</Text>
                                </Col>
                                <Col span={16}>
                                    <Text>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</Text>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Text strong>Rạp:</Text>
                                </Col>
                                <Col span={16}>
                                    <Text>{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}</Text>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Text strong>Địa chỉ:</Text>
                                </Col>
                                <Col span={16}>
                                    <Text>{thongTinPhim?.diaChi}</Text>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Text strong>Ghế:</Text>
                                </Col>
                                <Col span={16}>
                                    <Text>{danhSachGheDangDat.map((gheDD, index) => {
                                        return <span key={index}>{gheDD.tenGhe} </span>
                                    })}</Text>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Col span={8}>
                                    <Text strong>Tổng tiền:</Text>
                                </Col>
                                <Col span={16}>
                                    <Text>
                                        {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                            return tongTien += ghe.giaVe
                                        }, 0).toLocaleString()}
                                    </Text>
                                </Col>
                            </Row>
                            <Row gutter={8}>
                                <Button
                                    ghost
                                    type="primary"
                                    style={{ width: '100%' }}
                                    onClick={() => {
                                        const thongTinDatVe = {
                                            "maLichChieu": param.id,
                                            "danhSachVe": [danhSachGheDangDat.map((ghe, index) => {
                                                return ghe
                                            })]
                                        }
                                        console.log('thongTinDatVe', thongTinDatVe)
                                        dispatch(datVeAction(thongTinDatVe))
                                    }}
                                >
                                    Thanh toán
                                </Button>
                            </Row>
                            <Divider>
                                <Image src={thongTinPhim?.hinhAnh} alt={thongTinPhim?.tenPhim} width={200} preview={false} />
                            </Divider>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
