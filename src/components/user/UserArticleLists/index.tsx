'use client';
import React from 'react';
import {Grid} from "@chakra-ui/react";
import UserArticleCard from "@/components/user/UserArticleCard";
import {useMediaQuery} from "@mantine/hooks";
import {CustomModal} from "@/components/ui";
import ArticleDetail from "@/components/ArticleDetail";
import {useModal} from "@/hooks/useModal";

function UserArticleLists() {
    const {
        isModalOpen: isArticleModalOpen,
        openModal: openArticleDetailModal,
        closeModal: closeArticleDetailModal
    } = useModal();
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(min-width: 768px)");
    const isDesktop = useMediaQuery("(min-width: 1200px)");

    let columnsMaxWidth = 'auto';
    if (isTablet) columnsMaxWidth = '14rem';
    if (isDesktop) columnsMaxWidth = '17rem';

    return (
        <>
            <Grid width='100%'
                  templateColumns={`repeat(auto-fill, minmax(7rem, ${columnsMaxWidth}))`}
                  gap={1}
                  placeContent='center center'
                  placeItems='center center'
                  onClick={() => openArticleDetailModal()}
            >
                <UserArticleCard/>
                <UserArticleCard/>
                <UserArticleCard/>
                <UserArticleCard/>
            </Grid>
            <CustomModal isOpen={isArticleModalOpen} handleModalClose={closeArticleDetailModal}>
                <ArticleDetail/>
            </CustomModal>
        </>

    );
}

export default UserArticleLists;