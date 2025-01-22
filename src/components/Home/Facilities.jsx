import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import BookIcon from "@mui/icons-material/Book";
import theme from "../../theme/Theme";

const facilities = [
  { title: "Computer Lab", icon: <ComputerIcon sx={{ fontSize: 60 }} /> },
  { title: "Sports", icon: <SportsBasketballIcon sx={{ fontSize: 60 }} /> },
  { title: "Bus", icon: <DirectionsBusIcon sx={{ fontSize: 60 }} /> },
  { title: "Smart Class", icon: <SchoolIcon sx={{ fontSize: 60 }} /> },
  { title: "Labs", icon: <ScienceIcon sx={{ fontSize: 60 }} /> },
  { title: "Library", icon: <BookIcon sx={{ fontSize: 60 }} /> },
];

const Facilities = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        Our Facilities
      </Typography>

      {/* Grid Layout for Facilities in a single row */}
      <Grid container spacing={2} justifyContent="center">
        {facilities.map((facility, index) => (
          <Grid item key={index} xs={2}>
            <Box
              sx={{
                padding: "20px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                textAlign: "center",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  color: theme.palette.customBlue.main,
                  mb: 2,
                  fontSize: "2.5rem",
                }}
              >
                {facility.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {facility.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Facilities;
