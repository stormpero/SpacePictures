import React from "react";
import { Box, Typography, Divider, Stack, Link } from "@mui/material";

export const InfoModal = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
            }}
        >
            <Box
                component="img"
                src={
                    "https://starwars-galaxy.ru/800/600/https/naurok-test.nyc3.cdn.digitaloceanspaces.com/107209/images/144034_1585259346.jpg"
                }
                alt="earth"
                sx={{
                    height: "auto",
                    width: "90%",
                    borderRadius: "20px",
                    m: "10px",
                    textAlign: "center",
                }}
            />
            <Typography component="p" variant="h6">
                Each day a different image or photograph of our fascinating
                universe is featured, along with a brief explanation written by
                a professional astronomer.
            </Typography>
            <Divider sx={{ m: "10px 0px" }} />
            <Stack direction="row" gap={1} sx={{ justifyContent: "center" }}>
                <Typography component="p" variant="body1">
                    Source:
                </Typography>
                <Link
                    href="https://apod.nasa.gov/"
                    target="_blank"
                    underline="hover"
                >
                    Astronomy Picture of the Day
                </Link>
            </Stack>
        </Box>
    );
};
