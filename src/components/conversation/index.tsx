import { Layout } from "antd";
import React from "react";

type PropType = {
  slug?: string;
  boxId?: string | number;
};

const Conversation = ({ slug, boxId }: PropType) => {
  console.log("slug :>> ", slug);
  console.log("boxId :>> ", boxId);
  return <Layout>Hello</Layout>;
};

export default Conversation;
