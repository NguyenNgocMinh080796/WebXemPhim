import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { dangNhapAction } from '../redux/action/QuanLyNguoiDungAction';
import { TOKEN } from '../util/config';

const { Title } = Typography;

export default function SignInPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(dangNhapAction(values))
    };
    if (localStorage.getItem(TOKEN) !== '') {
        navigate(-1)
    }

    return (
        <div style={{ paddingTop: 200 }}>
            <Divider>
                <Title level={1} style={{ color: '#fff' }}>SIGN IN</Title>
                <Form
                    style={{ width: 300 }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="taiKhoan"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="matKhau"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item style={{ color: '#fff' }}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign In
                        </Button> Or <Button type='primary' ghost><NavLink to="/signup" style={{ color: '#fff' }}>Sign Up now!</NavLink></Button>
                    </Form.Item>
                </Form>
            </Divider>
        </div>
    )
}
