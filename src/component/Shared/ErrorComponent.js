import React from 'react'
import { Button, Result } from 'antd';
import { NavLink } from 'react-router-dom';

export default function ErrorComponent() {
    return (
        <div style={{ paddingTop: 100 }}>
            <Result
                status="404"
                subTitle={<p style={{ color: '#fff' }}>Sorry, the page you visited does not exist.</p>}
                extra={<Button type="primary"><NavLink to='/'>Back Home</NavLink></Button>}
            />
        </div>
    )
}
