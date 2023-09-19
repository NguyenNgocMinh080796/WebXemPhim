import React from 'react';
import { useNavigate } from 'react-router-dom'
import { HomeOutlined, UnorderedListOutlined, QuestionCircleOutlined, LoginOutlined, UpCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
    {
        label: 'Home',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: 'Showing Movies',
        key: 'showingmovies',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'Coming Movies',
        key: 'comingmovies',
        icon: <QuestionCircleOutlined />,
    },
    {
        label: 'Sign In',
        key: 'signin',
        icon: <LoginOutlined />,
    },
    {
        label: 'Sign Up',
        key: 'signup',
        icon: <UpCircleOutlined />,
    },
];

export default function MenuComponent() {
    const navigate = useNavigate()
    const onClick = (e) => {
        navigate(e.key)
    };

    return (
        <Menu onClick={onClick} mode="horizontal" items={items} theme='dark' />
    )
}
