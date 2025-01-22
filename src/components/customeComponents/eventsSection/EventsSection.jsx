// import React from "react";
// import { Box, Card, CardContent, Container, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// // import backgroundImg from "./path-to-your-background-image.jpg";  // replace with your image path

// // Event Data
// const events = [
//   {
//     title: "Tech Symposium",
//     icon: "💻",
//     bgImage: "/Img/facultiesImg/FacilitiesImg1.jpg",
//   },
//   {
//     title: "Sports Meet",
//     icon: "🏅",
//     bgImage: "/Img/facultiesImg/FacilitiesImg2.jpg",
//   },
//   {
//     title: "Cultural Fest",
//     icon: "🎭",
//     bgImage: "/Img/facultiesImg/FacilitiesImg6.jpg",
//   },
//   {
//     title: "Academic/Knowledge-Based Events",
//     icon: "🎓",
//     bgImage: "/Img/facultiesImg/FacilitiesImg3.jpg",
//   },
//   {
//     title: "Workshops and Seminars",
//     icon: "🧑‍🏫",
//     bgImage: "/Img/facultiesImg/FacilitiesImg4.jpg",
//   },
//   {
//     title: "Festivals and Celebrations",
//     icon: "🎉",
//     bgImage: "/Img/facultiesImg/FacilitiesImg5.jpg",
//   },
// ];

// const EventsSection = () => {
//   return (
//     <Container sx={{ marginTop: 5, position: "relative", overflow: "hidden" }}>
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: "bold", color: "primary.main", marginBottom: 4 }}
//       >
//         Campus Events
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           overflow: "hidden",
//           whiteSpace: "nowrap",
//           position: "relative",
//         }}
//       >
//         <motion.div
//           style={{ display: "flex" }}
//           animate={{ x: ["100%", "-100%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 50,
//             ease: "linear",
//           }}
//         >
//           {events.map((event, index) => (
//             <Box
//               key={index}
//               sx={{
//                 flex: "0 0 33.33%",
//                 padding: "0 10px",
//                 boxSizing: "border-box",
//               }}
//             >
//               <Card
//                 sx={{
//                   boxShadow: 3,
//                   borderRadius: 3,
//                   backgroundImage: `url(${event.bgImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   color: "#fff",
//                   "&:hover": {
//                     boxShadow: 6,
//                     transform: "scale(1.05)",
//                     transition: "transform 0.3s, box-shadow 0.3s",
//                   },
//                 }}
//               >
//                 <CardContent
//                   sx={{
//                     textAlign: "center",
//                     backdropFilter: "blur(5px)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   }}
//                 >
//                   {/* <Typography
//                     variant="h6"
//                     component="div"
//                     sx={{
//                       fontWeight: "bold",
//                       fontSize: 18,
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       gap: 1,
//                       color: "#fff",
//                     }}
//                   >
//                     <span style={{ fontSize: "2rem" }}>{event.icon}</span>
//                     {event.title}
//                   </Typography> */}
//                 </CardContent>
//               </Card>
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: 18,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 1,
//                   //   color: "#fff",
//                 }}
//               >
//                 <span style={{ fontSize: "2rem" }}>{event.icon}</span>
//                 {event.title}
//               </Typography>
//             </Box>
//           ))}
//         </motion.div>
//       </Box>
//     </Container>
//   );
// };

// export default EventsSection;
// ...........................................................

// import React, { useRef, useEffect, useState } from "react";
// import { Box, Card, CardContent, Container, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// // Event Data
// const events = [
//   {
//     title: "Tech Symposium",
//     icon: "💻",
//     bgImage: "/Img/facultiesImg/FacilitiesImg1.jpg",
//   },
//   {
//     title: "Sports Meet",
//     icon: "🏅",
//     bgImage: "/Img/facultiesImg/FacilitiesImg2.jpg",
//   },
//   {
//     title: "Cultural Fest",
//     icon: "🎭",
//     bgImage: "/Img/facultiesImg/FacilitiesImg6.jpg",
//   },
//   {
//     title: "Academic/Knowledge-Based Events",
//     icon: "🎓",
//     bgImage: "/Img/facultiesImg/FacilitiesImg3.jpg",
//   },
//   {
//     title: "Workshops and Seminars",
//     icon: "🧑‍🏫",
//     bgImage: "/Img/facultiesImg/FacilitiesImg4.jpg",
//   },
//   {
//     title: "Festivals and Celebrations",
//     icon: "🎉",
//     bgImage: "/Img/facultiesImg/FacilitiesImg5.jpg",
//   },
// ];

// const EventsSection = () => {
//   const scrollContainerRef = useRef(null);
//   const [scrollWidth, setScrollWidth] = useState(0);

//   useEffect(() => {
//     if (scrollContainerRef.current) {
//       const containerWidth = scrollContainerRef.current.scrollWidth;
//       setScrollWidth(containerWidth); // Total width of the content
//     }
//   }, []);

//   return (
//     <Container sx={{ marginTop: 5, position: "relative", overflow: "hidden" }}>
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         sx={{ fontWeight: "bold", color: "primary.main", marginBottom: 4 }}
//       >
//         Campus Events
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           overflow: "hidden",
//           whiteSpace: "nowrap",
//           position: "relative",
//         }}
//       >
//         <motion.div
//           ref={scrollContainerRef}
//           style={{ display: "flex" }}
//           animate={{ x: [0, -scrollWidth] }}
//           transition={{
//             repeat: Infinity,
//             duration: scrollWidth / 50, // Adjust duration dynamically
//             ease: "linear",
//           }}
//         >
//           {events.map((event, index) => (
//             <Box
//               key={index}
//               sx={{
//                 flex: "0 0 33.33%", // 3 cards per row
//                 padding: "0 10px",
//                 boxSizing: "border-box",
//               }}
//             >
//               <Card
//                 sx={{
//                   boxShadow: 3,
//                   borderRadius: 3,
//                   backgroundImage: `url(${event.bgImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   color: "#fff",
//                   "&:hover": {
//                     boxShadow: 6,
//                     transform: "scale(1.05)",
//                     transition: "transform 0.3s, box-shadow 0.3s",
//                   },
//                 }}
//               >
//                 <CardContent
//                   sx={{
//                     textAlign: "center",
//                     backdropFilter: "blur(5px)",
//                     backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   }}
//                 />
//               </Card>
//               <Typography
//                 variant="h6"
//                 component="div"
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: 18,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 1,
//                 }}
//               >
//                 <span style={{ fontSize: "2rem" }}>{event.icon}</span>
//                 {event.title}
//               </Typography>
//             </Box>
//           ))}
//         </motion.div>
//       </Box>
//     </Container>
//   );
// };

// export default EventsSection;
// ............................................................................

import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

// Event Data
const events = [
  {
    title: "Tech Symposium",
    icon: "💻",
    bgImage: "/Img/GalleryImg/img001.jpg",
  },
  {
    title: "Sports Meet",
    icon: "🏅",
    bgImage: "/Img/GalleryImg/img003.jpg",
  },
  {
    title: "Cultural Fest",
    icon: "🎭",
    bgImage: "/Img/GalleryImg/img002.jpg",
  },
  {
    title: "Academic Events",
    icon: "🎓",
    bgImage: "/Img/GalleryImg/img004.jpg",
  },
  {
    title: "Workshops",
    icon: "🧑‍🏫",
    bgImage: "/Img/GalleryImg/img005.jpg",
  },
  {
    title: "Festivals",
    icon: "🎉",
    bgImage: "/Img/GalleryImg/img003.jpg",
  },
];

const EventsSection = () => {
  const scrollContainerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Get the theme and media queries
  const theme = useTheme();
  const isXs = useMediaQuery("(max-width: 425px)"); // Extra-small screens
  const isSm = useMediaQuery("(max-width: 768px)"); // Small screens
  const isMd = useMediaQuery("(max-width: 1024px)"); // Medium screens

  // Define number of cards per row
  const cardsPerRow = isXs ? 1 : isSm ? 2 : isMd ? 3 : 3;

  useEffect(() => {
    const updateScrollWidth = () => {
      if (scrollContainerRef.current) {
        setScrollWidth(scrollContainerRef.current.scrollWidth);
      }
    };
    updateScrollWidth();
    window.addEventListener("resize", updateScrollWidth);
    return () => window.removeEventListener("resize", updateScrollWidth);
  }, []);

  return (
    <Container sx={{ pb: 5, position: "relative", overflow: "hidden" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        {/* Catet Events */}
        Latest Events
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <motion.div
          ref={scrollContainerRef}
          style={{ display: "flex", minWidth: "100%" }}
          animate={{ x: ["0%", "-50%"] }} // Seamless looping
          transition={{
            repeat: Infinity,
            duration: 20, // Fixed smooth speed
            ease: "linear",
          }}
        >
          {[...events, ...events].map((event, index) => (
            <Box
              key={index}
              sx={{
                my: 2,
                flex: `0 0 ${100 / cardsPerRow}%`, // Adjusting card size
                padding: { xs: "0 5px", sm: "0 8px", md: "0 12px" },
              }}
            >
              <Card sx={{ boxShadow: 3, borderRadius: { xs: 2, sm: 2 } }}>
                <CardMedia
                  component="img"
                  height={isXs ? "150" : "200"}
                  image={event.bgImage}
                  alt={event.title}
                  sx={{
                    borderTopLeftRadius: { xs: 6, sm: 8 },
                    borderTopRightRadius: { xs: 6, sm: 8 },
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      my: 0,
                      fontWeight: "bold",
                      fontSize: { xs: 16, sm: 18 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{event.icon}</span>
                    {event.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Container>
  );
};

export default EventsSection;
