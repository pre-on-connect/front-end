"use client";

import React from "react";
import SearchArticle from "@/components/searchArticle";
import SearchUser from "@/components/searchUser";
import { Layout } from "@/layout";
import { searchTypeAtom } from "@/store";
import { useRecoilValue } from "recoil";

const SearchPage = () => {
  const searchType = useRecoilValue(searchTypeAtom);

  return <Layout>{searchType === "article" ? <SearchArticle /> : <SearchUser />}</Layout>;
};

export default SearchPage;
