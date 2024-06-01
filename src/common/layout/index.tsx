"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Layout } from "antd";
import style from "./style.module.scss";
import Loading from "../app-loading";

type PropsType = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: PropsType) => {
  const [shouldLoading, setShouldLoading] = useState(true);
  const [outingLoading, setOutingLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOutingLoading(true);
    }, 1000);
    setTimeout(() => {
      setShouldLoading(false);
    }, 1800);
  }, []);

  return (
    <Layout className={style.mainLayout}>
      <Sidebar />
      <Layout>{children}</Layout>
      {shouldLoading && (
        <Loading isLoading={shouldLoading} isOuting={outingLoading} />
      )}
    </Layout>
  );
};

export default AppLayout;
