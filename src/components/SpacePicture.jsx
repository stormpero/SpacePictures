import React, { useState } from "react";
import {
    Container,
    IconButton,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import moment from "moment/moment";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { useQuery } from "react-query";

import { getSpacePictureByDay } from "../api/SpacePicture";
import { SkeletonLoading } from "./SkeletonLoading";

export const SpacePicture = () => {
    const isPhone = useMediaQuery((theme) => theme?.breakpoints.down("sm"));

    const [value, setValue] = useState(moment());

    const { isLoading, data, error } = useQuery(
        ["space picture", value.format("YYYY-MM-DD")],
        () => getSpacePictureByDay(value),
        {
            select: ({ data }) => data,
            enabled: true,
        }
    );

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleBack = () => {
        if (moment("1995-07-01").isBefore(value, "year|month")) {
            setValue((prev) => moment(prev).add(-1, "days"));
        }
    };

    const handleForward = () => {
        if (!value.startOf("day").isSameOrAfter(moment().startOf("day"))) {
            setValue((prev) => moment(prev).add(1, "days"));
        }
    };

    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: "10px",
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    <IconButton
                        onClick={() => handleBack()}
                        aria-label="delete"
                        size="large"
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <DesktopDatePicker
                        label="Date"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        minDate={moment("1995-07-01").toDate()}
                        maxDate={moment().toDate()}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <IconButton
                        onClick={handleForward}
                        aria-label="delete"
                        size="large"
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Stack>
            </Container>
            {isLoading ? (
                <SkeletonLoading />
            ) : (
                <>
                    <Typography variant="h4" component="h2">
                        {data.title}
                    </Typography>
                    <Box
                        component="img"
                        src={data.url}
                        alt={data.title}
                        sx={{
                            height: "auto",
                            width: "70%",
                            borderRadius: "10px",
                            m: "10px",
                        }}
                    />
                    <Typography
                        variant="h5"
                        component="p"
                        p={isPhone ? "0px" : "0px 30px"}
                        sx={{ textAlign: "start" }}
                    >
                        {data.explanation}
                    </Typography>
                </>
            )}
        </>
    );
};
