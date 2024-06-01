import React from "react";
import { Button, Flex, Menu, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import style from "./style.module.scss";

const GroupMenu = () => {
  return (
    <>
      <Flex className={style.title} gap="middle" justify="space-between">
        <Typography.Text strong className={style.text}>
          Nhóm
        </Typography.Text>
        <Button type="primary" icon={<PlusOutlined />} size={"small"}>
          Thêm
        </Button>
      </Flex>
      <Menu
        theme="dark"
        mode="inline"
        items={[
          {
            key: "sale",
            icon: <span className="ant-menu-item-icon">💰</span>,
            label: <Link href={"/conversation/group/1"}>Sale team</Link>,
            className: style.selectAnt,
          },
          {
            key: "fe",
            icon: <span className="ant-menu-item-icon">💻</span>,
            label: <Link href={"/conversation/group/2"}> Frontend team</Link>,
            className: style.selectAnt,
          },
        ]}
      />
    </>
  );
};

export default GroupMenu;
