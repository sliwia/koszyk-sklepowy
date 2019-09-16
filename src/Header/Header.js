import React from 'react';
import { Icon, Input, Button } from 'antd';
import './Header.scss';



export const Header = () => {
  
  return (
    <div className ="header-container">
      <div className="login-container">
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Login"
        />

        <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Hasło"
        />

        <Button className="log-btn" htmlType="submit">
            Zaloguj
        </Button>
      </div>
    </div>
  );
}