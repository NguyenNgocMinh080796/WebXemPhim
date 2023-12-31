import React, { useState } from 'react'
import { Carousel, Card, Image, Row, Col, Popover, Space, Button, Rate, Tabs, Typography, } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setBannerAction, setDanhSachPhimAction } from '../../redux/action/QuanLyPhimAction';
import { setHeThongRapAction } from '../../redux/action/QuanLyRapAction';
import TabPane from 'antd/es/tabs/TabPane';
import { NavLink, useNavigate } from 'react-router-dom';
import moment from 'moment'

const { Meta } = Card;
const { Paragraph } = Typography;

//LIST MOVIE
function PhimDangChieu() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setDanhSachPhimAction())
    }, [])

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)
    const renderMovieDangChieu = () => {
        return arrPhim.filter(phim => phim.dangChieu).map((phim, index) => {
            return <Col key={index} span={8} >
                <Popover placement='left' content={<p style={{ width: 300 }}>{phim.moTa}</p>} title={phim.tenPhim} trigger='hover' >
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt={phim.maPhim} src={phim.hinhAnh} style={{ height: 300 }} />}
                        actions={[
                            <Rate allowHalf disabled value={phim.danhGia / 2} style={{ fontSize: 15 }} />,
                            <Button type='link' onClick={() => { navigate(`detail/${phim.maPhim}`) }}>Đặt Vé</Button>
                        ]}
                    >
                        <Meta title={phim.tenPhim} />
                    </Card>
                </Popover>
            </Col>
        })
    }

    return (
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}
        >
            <Row gutter={[8, 8]}>
                {renderMovieDangChieu()}
            </Row>
        </Space >
    )
}
function PhimSapChieu() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setDanhSachPhimAction())
    }, [])

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)
    const renderMovieSapChieu = () => {
        return arrPhim.filter(phim => phim.dangChieu === false).map((phim, index) => {
            return <Col key={index} span={8} >
                <Popover placement='left' content={<p style={{ width: 300 }}>{phim.moTa}</p>} title={phim.tenPhim} trigger='hover' >
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt={phim.maPhim} src={phim.hinhAnh} style={{ height: 300 }} />}
                        actions={[
                            <Rate allowHalf disabled value={phim.danhGia / 2} style={{ fontSize: 15 }} />,
                            <Button type='link' onClick={() => { navigate(`detail/${phim.maPhim}`) }}>Đặt Vé</Button>
                        ]}
                    >
                        <Meta title={phim.tenPhim} />
                    </Card>
                </Popover>
            </Col>
        })
    }

    return (
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: 'flex',
            }}
        >
            <Row gutter={[8, 8]}>
                {renderMovieSapChieu()}
            </Row>
        </Space >
    )
}

export default function HomeContent() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setBannerAction());
        dispatch(setHeThongRapAction());
    }, [])

    //BANNER
    const contentStyle = {
        height: 630,
        color: '#fff',
        margin: 0,
        textAlign: 'center',
        background: '#000',
    };
    const { arrBanner } = useSelector(state => state.QuanLyPhimReducer)
    const renderBanner = () => {
        return arrBanner.map((banner, index) => {
            return <div key={index}>
                <div style={contentStyle}>
                    <Image width='100%' src={banner.hinhAnh} />
                </div>
            </div>
        })
    }

    //MOVIE
    const tabMovie = [
        {
            key: 'tab1',
            tab: 'PHIM ĐANG CHIẾU',
        },
        {
            key: 'tab2',
            tab: 'PHIM SẮP CHIẾU',
        },
    ];
    const contentTabMovie = {
        tab1: <PhimDangChieu />,
        tab2: <PhimSapChieu />,
    };
    const [activeTabMovie, setActiveTabMovie] = useState('tab1');
    const onTabMovieChange = (key) => {
        setActiveTabMovie(key);
    };

    // MOVIE THEATER
    const { heThongRap } = useSelector(state => state.QuanLyRapReducer)
    const renderTheater = () => {
        return heThongRap.map((heThongRap, index) => {
            return <TabPane key={index} tab={<Popover placement='left' content={<p>{heThongRap.tenHeThongRap}</p>}> <Image src={heThongRap.logo} style={{ width: 30 }} preview={false} alt={heThongRap.tenHeThongRap} /></Popover>}>
                <Tabs tabPosition='left' style={{ maxHeight: 450, padding: 0 }} >
                    {heThongRap.lstCumRap.map((cumRap, index) => {
                        return <TabPane key={index} style={{ maxHeight: 450, overflowY: 'auto' }} tab={<Row><Col span={3}><Image src={cumRap.hinhAnh} alt={cumRap.tenCumRap} style={{ width: 30 }} preview={false} /></Col><Col span={21}><p style={{ width: 300, textAlign: 'left', margin: 0, fontWeight: 'bold', fontSize: 10 }}>{cumRap.tenCumRap}</p><p style={{ margin: 0 }}><Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'Địa chỉ' }} style={{ width: 50, fontSize: 10 }}>{cumRap.diaChi}</Paragraph></p></Col></Row>}  >
                            {cumRap.danhSachPhim.map((phim, index) => {
                                return <Space key={index} direction='vertical' style={{ width: '100%', margin: 0 }}>
                                    <Card style={{ marginBottom: 20 }}>
                                        <div>
                                            <Image src={phim.hinhAnh} onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = "https://picsum.photos/200"; }} alt={phim.tenPhim} preview={false} style={{ width: "100%" }} />
                                            <h3>{phim.tenPhim}</h3>
                                        </div>
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>Suất chiếu: </p>
                                            <Space size='middle' wrap>
                                                {phim.lstLichChieuTheoPhim.map((lichChieu, index) => {
                                                    return <NavLink key={index} to={`/checkout/${lichChieu.maLichChieu}`}>
                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </NavLink>
                                                })}
                                            </Space>
                                        </div>
                                    </Card>
                                </Space>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }

    return (
        <>
            {/* CAROUSEL */}
            <div style={{ marginBottom: 100 }}>
                <Carousel autoplay >
                    {renderBanner()}
                </Carousel>
            </div>

            {/* MOVIE */}
            <div style={{ marginBottom: 100, padding: '0 150px 0 150px' }}>
                <Card
                    style={{
                        width: '100%'
                    }}
                    tabList={tabMovie}
                    activeTabKey={activeTabMovie}
                    onTabChange={onTabMovieChange}
                >
                    <div style={{ maxHeight: 450, overflowY: 'auto', padding: 0 }}>
                        {contentTabMovie[activeTabMovie]}
                    </div>
                </Card>
            </div >

            {/* THEATER */}
            <div style={{ marginBottom: 100, padding: '0 150px 0 150px' }}>
                <Card style={{ height: 500 }}>
                    <Tabs defaultActiveKey="1" tabPosition='left' >
                        {renderTheater()}
                    </Tabs>
                </Card>
            </div>
        </>
    )
}
