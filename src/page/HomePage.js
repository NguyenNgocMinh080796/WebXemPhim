import React from 'react'
import { Layout, Image, Row, Space, Avatar, Typography } from 'antd';
import MenuComponent from '../component/Shared/MenuComponent';
import { UserOutlined } from '@ant-design/icons';
import ContentComponent from '../component/Shared/ContentComponent';
import { NavLink } from 'react-router-dom';
import FooterComponent from '../component/Shared/FooterComponent';
import { useSelector } from 'react-redux';
import { USER_SIGNIN } from '../util/config';

const { Header, Content, Footer } = Layout;
const { Text } = Typography

export default function HomePage() {
    const { thongTinDangNhap } = useSelector(state => state.QuanLyNguoiDungReducer)
    const renderAvatar = () => {
        if (localStorage.getItem(USER_SIGNIN) !== '') {
            return <>
                <Avatar size='large' src='https://picsum.photos/200' />
                <Text style={{ color: '#fff' }}>Hello, {thongTinDangNhap.hoTen}!</Text>
            </>
        } else {
            return <>
                <Avatar size='large' icon={<UserOutlined />} />
                <Text style={{ color: '#fff' }}>Hello, friend!</Text>
            </>
        }
    }

    return (
        <Layout className="layout" style={{ backgroundColor: '#000' }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'fixed',
                    zIndex: 10,
                    padding: 0,
                    width: window.innerWidth
                }}
            >
                <Row justify='center' gutter={62} style={{ width: window.innerWidth }}>
                    <Space size='large'>
                        <NavLink to='/'>
                            <Image
                                preview={false}
                                width={65}
                                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                            />
                        </NavLink>
                        <MenuComponent />
                        {renderAvatar()}
                    </Space>
                </Row>
            </Header>

            <Content >
                <div style={{ minHeight: window.innerHeight, }} >
                    <ContentComponent />
                </div>
            </Content>

            <Footer
                style={{
                    color: '#fff',
                    textAlign: 'center',
                    backgroundColor: '#001529'
                }}
            >
                <FooterComponent />
            </Footer>
        </Layout>
    )
}
