import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
        mt: 4,
        borderTop: "1px solid #ddd",
        backgroundColor: "#222f3e",
        color: "white",
      }}
    >
      <Typography variant="h6">
        © 2025 Anurag Public School, Raipur. All rights reserved.
      </Typography>
    </Box>
  );
}
