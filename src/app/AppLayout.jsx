import React from "react";
import { Box, Container, makeStyles, useMediaQuery } from "@mui/material";
import { HelpMenu } from "../components/HelpMenu/HelpMenu";
import { SpacePicture } from "../components/SpacePicture";

export const AppLayout = () => {
    const isPhone = useMediaQuery((theme) => theme?.breakpoints.down("md"));
    const bgUrl =
        "https://on-desktop.com/wps/2020Nature_Sunset_behind_the_mountains_in_the_night_sky_at_dusk_146336_.jpg";
    return (
        <Box
            sx={{
                backgroundImage: `url(${bgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                padding: "20px",
                position: "relative",
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    bgcolor: "background.paper",
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: isPhone ? "15px" : "30px",
                    minHeight: "100vh",
                }}
            >
                <SpacePicture />
                <HelpMenu />
            </Container>
        </Box>
    );
};
