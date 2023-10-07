import React from 'react';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {Link} from "@chakra-ui/next-js";

export type Paths = {
    'pathname': string;
    'link': string;
}[];

export interface CustomBreadcrumbProps {
    paths: Paths;
}

function CustomBreadcrumb({paths}: CustomBreadcrumbProps) {

    return (
        <Breadcrumb
            mt='1rem'
            ml='auto'
            fontSize={['sm', 'lg', 'lg']}
            spacing='4px'
            separator={<ChevronRightIcon color='gray.500'/>}>
            {
                paths.map((v, index) => (
                    <BreadcrumbItem
                        key={v.link}
                        isCurrentPage={index === (paths.length - 1)}
                        fontWeight={index === (paths.length - 1) ? '600' : 'medium'}
                    >{
                        index === (paths.length - 1) ?
                            <BreadcrumbLink  href={v.link}>{v.pathname}</BreadcrumbLink>
                            :
                            <BreadcrumbLink as={Link} href={v.link} replace={true}>{v.pathname}</BreadcrumbLink>

                    }
                    </BreadcrumbItem>
                ))
            }
        </Breadcrumb>
    );
}

export default CustomBreadcrumb;