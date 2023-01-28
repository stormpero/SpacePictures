import React from "react";
import { Container, Skeleton } from "@mui/material";

export const SkeletonLoading = () => {
    return (
        <Container>
            <Skeleton
                animation="wave"
                height={40}
                sx={{ mb: 2 }}
                width="100%"
            />
            <Skeleton variant="rectangular" width="100%" sx={{ mb: 3 }}>
                <div style={{ paddingTop: "77%" }} />
            </Skeleton>
            <Skeleton animation="wave" height={30} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={30} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={30} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={30} sx={{ mb: 1 }} />
            <Skeleton animation="wave" height={30} sx={{ mb: 1 }} />
        </Container>
    );
};
