import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface Props {
    email: string;
    stream: MediaStream;
    muted?: boolean;
}

const Container = styled(Box)({
    position: 'relative',
    display: 'inline-block',
    width: '240px',
    height: '270px',
    margin: '5px',
});

const VideoContainer = styled('video')({
    width: '240px',
    height: '240px',
    backgroundColor: 'black',
});

const UserLabel = styled(Typography)({
    display: 'inline-block',
    position: 'absolute',
    top: '230px',
    left: '0px',
});

const Video: React.FC<Props> = ({ email, stream, muted }) => {
    const ref = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState<boolean>(false);

    useEffect(() => {
        if (ref.current) ref.current.srcObject = stream;
        if (muted) setIsMuted(muted);
    }, [stream, muted]);

    return (
        <Container>
            <VideoContainer ref={ref} muted={isMuted} autoPlay />
            <UserLabel variant="caption">{email}</UserLabel>
        </Container>
    );
};

export default Video;
