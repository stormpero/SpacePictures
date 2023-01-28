import React from "react";
import { Box, Fade, Modal } from "@mui/material";

export const ModalWindow = ({ open, handleClose, children }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Fade in={open}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 500,
                        bgcolor: "background.paper",
                        borderRadius: "20px",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
};
