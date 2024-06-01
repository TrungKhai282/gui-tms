"use client";

import React from "react";
import { Layout, Menu } from "antd";
import { MessageOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import { PRIVATE_ROUTE } from "@/common/routes";
import style from "./style.module.scss";
import PlatformMenu from "./PlatformMenu";
import GroupMenu from "./GroupMenu";

const Sidebar = () => {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={false}
      width={230}
      className={style.sidebar}
      theme="dark"
      collapsedWidth={0}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[PRIVATE_ROUTE.INDEX]}
        items={[
          {
            key: PRIVATE_ROUTE.INDEX,
            icon: <MessageOutlined />,
            label: <Link href={"/conversation"}>Tất cả</Link>,
            className: style.selectAnt,
          },
          {
            key: PRIVATE_ROUTE.CHAT_MENTION,
            icon: (
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            ),
            label: <Link href={"/conversation/mention"}>Được đề cập đến</Link>,
            className: style.selectAnt,
          },
          {
            key: PRIVATE_ROUTE.CHAT_UNREAD,
            icon: <MailOutlined />,
            label: <Link href={"/conversation/unread"}>Chưa đọc</Link>,
            className: style.selectAnt,
          },
        ]}
      />
      <PlatformMenu />
      <GroupMenu />
    </Layout.Sider>
  );
};

export default Sidebar;
