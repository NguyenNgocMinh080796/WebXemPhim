import React from 'react'
import { Layout, Image, Row } from 'antd';
import MenuComponent from '../component/Shared/MenuComponent';
import ContentComponent from '../component/Shared/ContentComponent';

const { Header, Content, Footer } = Layout;

export default function HomePage() {
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
                    <Image
                        width={65}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                    <MenuComponent />
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
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    )
}
