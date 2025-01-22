import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
} from "@mui/material";
import facultiesData from "../../../data/facultiesData.json";

const Faculties = () => {
  return (
    <Container>
      <Box sx={{ p: 4 }}>
        {/* Page Title */}
        <Typography  variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}>
          Our Faculties
        </Typography>

        {/* Faculties Grid */}
        <Grid container spacing={2}>
          {facultiesData.map((faculty, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center", mb: 2 }}
            >
              <Card
                elevation={6}
                sx={{
                  width: "100%",
                  maxWidth: 345,
                  // height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  pt: 2,
                  transition: "transform 0.3s ease, box-shadow 0.8s ease", // Smooth animation
                  "&:hover": {
                    transform: "translate(1px, -4px)", // Moves up and right
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Adds a shadow on hover
                  },
                }}
              >
                {/* Faculty Image */}
                <CardMedia
                  component="img"
                  height="180"
                  image={faculty.profileImage}
                  alt={faculty.title}
                  sx={{
                    objectFit: "cover",
                    borderRadius: "50%",
                    width: "180px",
                    height: "180px",
                    margin: "0 auto",
                  }}
                />
                {/* Faculty Content */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    // padding: "0 16px",
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {faculty.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {faculty.specialist}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Faculties;
