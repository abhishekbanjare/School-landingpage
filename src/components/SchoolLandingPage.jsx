import React from "react";
import { Box } from "@mui/material";
import Home from "./Home/Home";

const SchoolLandingPage = () => {
  return (
    <Box
    sx={{
      margin: 0,
      padding: 0,
      width: "100vw",
      minHeight: "100vh", // Full screen height ensure करें
      overflowX: "hidden", // Horizontal overflow remove करें
      overflowY: "auto", // Vertical scrollbar ठीक से handle करें
    }}
    >
      {/* Home Content */}
      <Box sx={{ textAlign: "center" }}>
        <Home />
      </Box>
    </Box>
  );
};

export default SchoolLandingPage;
