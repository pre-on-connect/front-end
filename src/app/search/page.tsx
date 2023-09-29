import React from "react";
import SearchArticle from "@/components/searchArticle";
import SearchUser from "@/components/searchUser";
import DesktopLayout from "@/layout/DesktopLayout";

const SearchPage = () => {
  return (
    <DesktopLayout>
      <SearchArticle />
      <SearchUser />
    </DesktopLayout>
  );
};

export default SearchPage;
