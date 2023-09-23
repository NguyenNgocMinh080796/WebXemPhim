import { Space } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterComponent() {
    return (
        <Space size='large' direction='vertical'>
            <Space style={{ fontSize: 30 }} size='large'>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: 20 }}>Liên hệ: </p>
                <NavLink to='https://github.com/NguyenNgocMinh080796' style={{ color: '#fff' }}><i className="icon-contact fa-brands fa-github"></i></NavLink>
                <NavLink to='https://www.facebook.com/NguyenNgocMinh0807/' style={{ color: '#fff' }}><i className="icon-contact fa-brands fa-facebook-messenger"></i></NavLink>
                <NavLink to='tel:0937293509' style={{ color: '#fff' }}><i className="fa-solid fa-phone" /></NavLink>
                <NavLink to='mailto:nguyen.ngoc.minh080796@gmail.com' style={{ color: '#fff' }}><i className="fa-solid fa-envelope" /></NavLink>
            </Space>
            <p style={{ margin: 0, fontWeight: 'bold', fontSize: 15 }}>Created by NGUYỄN NGỌC MINH - Dự án học tập "Dự án Web Xem Phim"</p>
        </Space>
    )
}
