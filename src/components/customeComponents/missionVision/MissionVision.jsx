import { Container, Grid, Box, Typography } from "@mui/material";
import React from "react";

export default function MissionVision() {
  return (
    <Container sx={{ padding: "2rem 0" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        {/* Our Mission & Vission */}
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {/* Mission Section */}

        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundColor: "#e3f2fd",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease", // Smooth transition for hover
              "&:hover": {
                transform: "scale(1.02)", // Slightly enlarge on hover
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)", // Enhance shadow on hover
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#1976d2" }}
            >
              Our Mission
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
              To inspire and empower students to achieve their full potential
              through quality education, fostering curiosity, creativity, and a
              lifelong love for learning.
            </Typography>
          </Box>
        </Grid>

        {/* Vision Section */}
        <Grid item xs={12} md={6} sx={{ display: "flex" }}>
          <Box
            sx={{
              backgroundColor: "#e8f5e9",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "all 0.3s ease", // Smooth transition for hover
              "&:hover": {
                transform: "scale(1.01)", // Slightly enlarge on hover
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)", // Enhance shadow on hover
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#388e3c" }}
            >
              Our Vision
            </Typography>
            <Typography variant="body2" sx={{ color: "#555", lineHeight: 1.6 }}>
              To inspire and empower students to achieve their full potential
              through quality education, fostering curiosity, creativity, and a
              lifelong love for learning. society.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
