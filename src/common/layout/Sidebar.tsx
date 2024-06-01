"use client";

import React from "react";
import { Layout, Menu } from "antd";
import { MessageOutlined, SolutionOutlined } from "@ant-design/icons";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PRIVATE_ROUTE } from "../routes";

const Sidebar = () => {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={true}
      className={style.sider}
      collapsedWidth={50}
    >
      <Link href={PRIVATE_ROUTE.INDEX} className={style.logo}>
        <Image src={"/icons/tms-192.png"} width={30} height={30} alt="Logo" />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[PRIVATE_ROUTE.INDEX]}
        items={[
          {
            key: PRIVATE_ROUTE.INDEX,
            icon: <MessageOutlined />,
            label: <Link href={"/"}>Trò chuyện</Link>,
          },
          {
            key: PRIVATE_ROUTE.CONTACT,
            icon: <SolutionOutlined />,
            label: <Link href={"/contact"}>Liên hệ</Link>,
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
