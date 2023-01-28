import React, { useEffect, useState } from "react";
import {
    Container,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

import { useSettings } from "../../app/MyThemeProvider/SettingsContext";

export const SettingsModal = () => {
    const settings = useSettings();

    const [alignment, setAlignment] = useState(null);

    useEffect(() => {
        setAlignment(settings.mode);
    }, [settings.mode]);

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
            settings.toggleColorMode(newAlignment);
        }
    };
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="h6"
                color="textSecondary"
                sx={{
                    padding: "20px",
                }}
            >
                MODE
            </Typography>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="light">
                    <LightModeIcon />
                    <Typography
                        variant="subtitle2"
                        sx={{ padding: "0px 18px 0px" }}
                    >
                        Light
                    </Typography>
                </ToggleButton>
                <ToggleButton value="system">
                    <SettingsBrightnessIcon />
                    <Typography
                        variant="subtitle2"
                        sx={{ padding: "0px 18px 0px" }}
                    >
                        System
                    </Typography>
                </ToggleButton>
                <ToggleButton value="dark">
                    <DarkModeOutlinedIcon />
                    <Typography
                        variant="subtitle2"
                        sx={{ padding: "0px 18px 0px" }}
                    >
                        Dark
                    </Typography>
                </ToggleButton>
            </ToggleButtonGroup>
        </Container>
    );
};
