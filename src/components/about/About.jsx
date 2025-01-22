import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import WhyChooseUs from "../customeComponents/whyChooseUs/WhyChooseUs";
import MissionVision from "../customeComponents/missionVision/MissionVision";

export default function About() {
  return (
    <Box sx={{ padding: "2rem 0", backgroundColor: "#f9f9f9" }}>
      <Container>
        {/* Title Section */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          About Our School
        </Typography>

        {/* Intro Section */}
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#555",
            textAlign: "center",
            mb: 6,
          }}
        >
          Our school is committed to fostering an environment of excellence,
          creativity, and inclusivity. Established in [Year], we aim to provide
          students with the skills, knowledge, and values needed to thrive in an
          ever-changing world. With state-of-the-art facilities, experienced
          educators, and a holistic approach to learning, we ensure that every
          student achieves their highest potential.
        </Typography>
        <MissionVision />
        <Box>
          <WhyChooseUs />
        </Box>
      </Container>
    </Box>
  );
}
