import React from "react";
import { CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { QueryClient, QueryClientProvider } from "react-query";

import { MyThemeProvider } from "./MyThemeProvider/MyThemeProvider";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const AppProvider = ({ children }) => {
    return (
        <MyThemeProvider>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <QueryClientProvider client={queryClient}>
                    {children}
                    <CssBaseline />
                </QueryClientProvider>
            </LocalizationProvider>
        </MyThemeProvider>
    );
};
