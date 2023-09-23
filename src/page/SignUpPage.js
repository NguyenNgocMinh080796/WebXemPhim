import React from 'react';
import { LockOutlined, UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Typography } from 'antd';
import { useDispatch } from 'react-redux'
import { dangKyAction } from '../redux/action/QuanLyNguoiDungAction';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export default function SignUpPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(dangKyAction(values))
        navigate('/signin')
    };

    return (
        <div style={{ paddingTop: 150 }}>
            <Divider>
                <Title level={1} style={{ color: '#fff' }}>SIGN UP</Title>
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

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            }
                        ]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="soDt"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
                    </Form.Item>

                    <Form.Item
                        name="hoTen"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Fullname!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Fullname" />
                    </Form.Item>

                    <Form.Item style={{ color: '#fff' }}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </Divider>
        </div>
    )
}
