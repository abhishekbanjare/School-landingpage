import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer toggle state
  const [activeMenu, setActiveMenu] = useState("Home"); // Track active menu
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // For small and extra small screens

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", subMenu: ["Mission", "Vision", "Team"] },
    { name: "Academics", subMenu: ["Programs", "Faculties", "Research"] },
    { name: "Curriculum", link: "/curriculum" },
    { name: "Admission", subMenu: ["Process", "Fees", "FAQ"] },
    { name: "Gallery", link: "/gallery" },
    { name: "Career", subMenu: ["Jobs", "Internships", "Volunteering"] },
    { name: "Contact Us", link: "/contact" },
    { name: "Scholarship", link: "/scholarship" },
  ];

  const handleClick = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(openMenu === menuName ? null : menuName);
    setActiveMenu(menuName); // Update active menu
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const renderMenuItems = (mobile = false) =>
    menuItems.map((item, index) => (
      <Box key={index}>
        {item.subMenu ? (
          <>
            <Button
              color="inherit"
              onClick={(e) => handleClick(e, item.name)}
              endIcon={
                openMenu === item.name ? <ExpandLessIcon /> : <ExpandMoreIcon />
              }
              sx={{
                textTransform: "none",
                color: activeMenu === item.name ? "yellow" : "inherit", // Active menu color
              }}
            >
              {item.name}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={openMenu === item.name}
              onClose={handleClose}
            >
              {item.subMenu.map((subItem, subIndex) => (
                <MenuItem
                  key={subIndex}
                  onClick={() => setActiveMenu(subItem)} // Set active submenu
                  sx={{
                    backgroundColor:
                      activeMenu === subItem
                        ? "rgba(255, 255, 0, 0.3)"
                        : "inherit",
                  }}
                >
                  {subItem}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Button
            color="inherit"
            href={item.link}
            onClick={() => setActiveMenu(item.name)} // Set active menu
            sx={{
              textTransform: "none",
              color: activeMenu === item.name ? "yellow" : "inherit", // Active menu color
            }}
          >
            {item.name}
          </Button>
        )}
      </Box>
    ));

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {/* School Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img
            src="/logo.png"
            alt="School Logo"
            style={{ height: 50, cursor: "pointer" }}
          />
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>{renderMenuItems()}</Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left" // Set drawer to open from the left
              open={drawerOpen}
              onClose={() => toggleDrawer(false)}
            >
              <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
                <img src="/logo.png" alt="Drawer Logo" style={{ height: 40 }} />
                <IconButton
                  sx={{ ml: "auto" }}
                  onClick={() => toggleDrawer(false)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Divider />
              <List sx={{ width: 250 }}>
                {menuItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem
                      button
                      onClick={() => {
                        item.link
                          ? (window.location.href = item.link)
                          : setOpenMenu(
                              openMenu === item.name ? null : item.name
                            );
                        setActiveMenu(item.name); // Set active menu
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        primaryTypographyProps={{
                          color:
                            activeMenu === item.name ? "yellow" : "inherit",
                        }}
                      />
                      {item.subMenu && (
                        <>
                          {openMenu === item.name ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </>
                      )}
                    </ListItem>
                    {item.subMenu && openMenu === item.name && (
                      <Box sx={{ pl: 4 }}>
                        {item.subMenu.map((subItem, subIndex) => (
                          <ListItem
                            key={subIndex}
                            button
                            onClick={() => {
                              setActiveMenu(subItem); // Update active submenu
                            }}
                            sx={{
                              backgroundColor:
                                activeMenu === subItem
                                  ? "rgba(255, 255, 0, 0.3)"
                                  : "inherit",
                            }}
                          >
                            <ListItemText primary={subItem} />
                          </ListItem>
                        ))}
                      </Box>
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
