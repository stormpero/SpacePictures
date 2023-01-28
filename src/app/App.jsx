import React from "react";
import { AppLayout } from "./AppLayout";
import { AppProvider } from "./AppProvider";

function App() {
    return (
        <AppProvider>
            <AppLayout />
        </AppProvider>
    );
}

export default App;
