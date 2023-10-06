import React from 'react';
import {Button} from "@chakra-ui/react";

interface FollowStatusButtonProps {
    nickname?: string;
    isFollowing?: boolean;
}

function FollowStatusButton({nickname, isFollowing}: FollowStatusButtonProps) {
    // todo - onClickHandler -> 팔로우, 언팔로우
    return (
        <Button
            fontSize='inherit'
            ml='auto'
            variant='trans-basic'
            color={isFollowing ? 'secondary':'blue'}
            size='xs'
            onClick={() => console.log(nickname)}
        >
            {isFollowing ? '팔로잉':'팔로우'}
        </Button>
    );
}

export default FollowStatusButton;