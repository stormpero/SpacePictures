import React, { useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { InfoModal } from "./InfoModal";
import { ModalWindow } from "../ModalWindow";
import { SettingsModal } from "./SettingsModal";

export const HelpMenu = () => {
    const isPhone = useMediaQuery((theme) => theme?.breakpoints.down("md"));
    const [openInfo, setOpenInfo] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    return (
        <Box
            sx={{
                position: "fixed",
                top: "0px",
                right: "0px",
            }}
        >
            <Stack>
                <IconButton
                    onClick={() => setOpenInfo(true)}
                    sx={{ background: isPhone? "#1B262C" : "" }}
                >
                    <HelpOutlineIcon sx={{ color: "#fff", fontSize: "35px" }} />
                </IconButton>
                <IconButton
                    onClick={() => setOpenSettings(true)}
                    sx={{ background: isPhone? "#1B262C" : "" }}
                >
                    <SettingsOutlinedIcon
                        sx={{ color: "#fff", fontSize: "35px" }}
                    />
                </IconButton>
            </Stack>
            <ModalWindow open={openInfo} handleClose={() => setOpenInfo(false)}>
                <InfoModal />
            </ModalWindow>
            <ModalWindow
                open={openSettings}
                handleClose={() => setOpenSettings(false)}
            >
                <SettingsModal />
            </ModalWindow>
        </Box>
    );
};
