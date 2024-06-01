import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

const NoInternet = () => {
  return (
    <div className={style.noInternet}>
      <div className={style.center}>
        <div className={style.icon}>
          <Image
            src={"/no-internet.png"}
            width={130}
            height={130}
            alt="no-internet"
          />
        </div>
        <div className={style.title}>Ooops!</div>
        <div className={style.text}>
          Không có kết nối internet. Vui lòng kiểm tra đường truyền mạng của
          bạn.
        </div>
        <button>Kiểm tra lại</button>
      </div>
    </div>
  );
};

export default NoInternet;
