import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

const Welcome = () => {
  return (
    <Container>
      <Box
        sx={{
          padding: { xs: 2, sm: 4, md: 6 },
          // backgroundColor: "#f5f5f5",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Welcome <span style={{ color: "#B50303" }}>To</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Anurag Public School, Raipur
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: { xs: "center", md: "left" },
                lineHeight: 1.8,
                color: "#555",
              }}
            >
              Our school is dedicated to providing a nurturing environment where
              students can grow, learn, and excel. With a strong focus on
              academic excellence and character building, we aim to empower our
              students to achieve their dreams and contribute to society.
              Explore our wide range of activities and programs designed to
              enrich your child’s learning experience.
            </Typography>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="Img/homeImg/Welcome.jpg" // Replace with your image path D:\Techcherry\School-landingpage\public\Welcome.jpg
              alt="Welcome"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
                // boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Welcome;
