import React from "react";
import style from "./style.module.scss";
import { Space } from "antd";
import { Logo, RightTitle, SignInForm } from "./Client";

const LoginScreen = () => {
  return (
    <div className={style.loginScreen}>
      <div className={style.left}>
        <Logo />
      </div>
      <div className={style.right}>
        <Space direction="vertical" size="large" className={style.loginForm}>
          <RightTitle />
          <SignInForm />
        </Space>
      </div>
    </div>
  );
};

export default LoginScreen;
