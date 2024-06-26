import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

const Conversation = dynamic(() => import("@/components/conversation"));

export const metadata: Metadata = {
  title: "Conversation",
  description: "Generated by create next app",
};

const Team = ({ params }: { params: { id: string } }) => {
  return <Conversation slug="team" boxId={params.id} />;
};

export default Team;
