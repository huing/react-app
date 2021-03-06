import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import Cookies from "js-cookie";
import "./index.less";

@withRouter
@observer
class NormalLogin extends Component {
  handleSubmit = async (values) => {
    const { history } = this.props;
    Cookies.set("LOGINDATA", {
      name: "小西",
    });
    history.push("/home");
  };
  render() {
    return (
      <div className="page-user">
        <div className="section-a" />

        <div className="user-login">
          <Form onFinish={this.handleSubmit} initialValues={{ phone: "18368856034", password: "123456" }}>
            <Form.Item name="phone" rules={[{ required: true, message: "请输入用户名" }]}>
              <Input placeholder="用户名" size="large" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
              <Input type="password" size="large" placeholder="密码" />
            </Form.Item>
            {/* {msg && <div style={{color: 'red', padding: '0 0 12px 12px'}}>{msg}</div>} */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="section-a" />
      </div>
    );
  }
}
export default NormalLogin;
