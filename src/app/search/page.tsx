import React from "react";
import SearchArticle from "@/components/searchArticle";
import SearchUser from "@/components/searchUser";
import { Layout } from "@/layout";

const SearchPage = () => {
  return (
    <Layout>
      <SearchArticle />
      <SearchUser />
    </Layout>
  );
};

export default SearchPage;
