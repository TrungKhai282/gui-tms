"use client";

import style from "./style.module.scss";

import { Button, Checkbox, Flex, Form, Input, Space, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { useRouter } from "next/navigation";
export const Logo = () => {
  return (
    <Typography.Title className={style.textLogo}>
      TMS <br /> PLATFORM
    </Typography.Title>
  );
};

export const RightTitle = () => {
  return (
    <div className={style.title}>
      <Typography.Title className={style.textLogo}>
        TMS <br /> PLATFORM
      </Typography.Title>
      <Typography.Title level={4}>Chào mừng bạn !</Typography.Title>
      <Typography.Text type="secondary">
        Vui lòng đăng nhập để sử dụng hệ thống
      </Typography.Text>
    </div>
  );
};

export const SignInForm = () => {
  const navigate = useRouter();
  const onFinish = (values: any) => {
    console.log("values :>> ", values);
    navigate.replace("/conversation");
  };
  return (
    <Form
      name="normal_login"
      className={style.mainForm}
      onFinish={onFinish}
      initialValues={{
        rememberMe: false,
      }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Flex align="baseline" gap={16}>
        <Form.Item name="rememberMe" valuePropName="checked">
          <Checkbox>Ghi nhớ đăng nhập</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Flex>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={style.btnSubmit}
          // loading={isPending}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
