"use client";

import { RecoilRoot } from "recoil";

interface ClientProps {
  children: React.ReactNode;
}

const Client = ({ children }: ClientProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Client;
