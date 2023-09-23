import React, { useEffect } from 'react'
import { Typography, Col, Image, Row, Tabs, Card, Progress, Rate, Avatar, Popover, Space } from 'antd'
import moment from 'moment'
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFilmDetailAction } from '../redux/action/QuanLyRapAction';
import TabPane from 'antd/es/tabs/TabPane';

const { Title, Text, Paragraph } = Typography;

export default function FilmDetailPage() {
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(setFilmDetailAction(params.id))
    }, [])

    const { filmDetail } = useSelector(state => state.QuanLyRapReducer)
    // console.log('filmDetail', filmDetail)

    const renderTabBar = () => {
        if (filmDetail.heThongRapChieu !== '') {
            return filmDetail.heThongRapChieu?.map((htr, index) => {
                return <TabPane key={index} tab={<Popover placement='left' content={<Text>{htr.tenHeThongRap}</Text>}><Avatar src={htr.logo} /></Popover>}>
                    {htr.cumRapChieu?.map((cumRap, index) => {
                        return <div key={index} style={{ marginBottom: 20 }}>
                            <Space direction='horizontal' style={{ marginBottom: 20 }}>
                                <Image src={cumRap.hinhAnh} alt={cumRap.tenCumRap} preview={false} width={40} />
                                <Space direction='vertical'>
                                    <Text strong >{cumRap.tenCumRap}</Text>
                                    <Text italic type="secondary">{cumRap.diaChi}</Text>
                                </Space>
                            </Space>
                            <div size='middle'>
                                <Space size='middle'>
                                    {cumRap.lichChieuPhim?.map((lcp, index) => {
                                        return <NavLink to={`/checkout/${lcp.maLichChieu}`} >{moment(lcp.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                    })}
                                </Space>
                            </div>
                            <hr />
                        </div>
                    })
                    }
                </TabPane >
            })
        }
    }

    return (
        <>
            <div style={{ padding: '100px 100px' }}>
                <Row >
                    <Col span={8}>
                        <Image
                            width={300}
                            preview={{
                                imageRender: () => (
                                    <video
                                        autoPlay
                                        width="100%"
                                        controls
                                        src={filmDetail.trailer}
                                    />
                                ),
                                toolbarRender: () => null,
                            }}
                            src={filmDetail.hinhAnh}
                        />
                    </Col>
                    <Col span={16}>
                        <div style={{ marginBottom: 20 }}>
                            <Row gutter={16} align='middle'>
                                <Col span={16}>
                                    <Text style={{ color: '#fff' }}>Ngày chiếu:  {moment(filmDetail.ngayKhoiChieu).format('DD / MM / YYYY')}</Text>
                                    <Title level={2} style={{ color: '#fff', marginTop: 15 }}>{filmDetail.tenPhim}</Title>
                                    <Paragraph ellipsis={{ rows: 4, expandable: true, symbol: 'Thêm' }} style={{ color: '#fff' }}>{filmDetail.moTa}</Paragraph>
                                </Col>
                                <Col span={8} style={{ textAlign: 'center' }}>
                                    <Text style={{ color: '#fff' }}>Đánh giá:</Text><br />
                                    <Rate allowHalf disabled value={filmDetail.danhGia / 2} style={{ fontSize: 10, margin: 10 }} />
                                    <Progress type="circle" percent={filmDetail.danhGia * 10} size={150} strokeColor='#fff' format={(percent) => <p style={{ color: '#fff' }}>{percent} %</p>} />
                                </Col>
                            </Row>
                        </div>
                        <Card
                            style={{
                                width: '100%',
                            }}
                        >
                            <Tabs defaultActiveKey="1" tabPosition='left'>
                                {renderTabBar()}
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </div >
        </>
    )
}
