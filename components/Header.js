"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";

const defaultNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/screen/about" },
  { label: "Projects", href: "/screen/projects" },
  { label: "Skills", href: "/screen/skills" },
  // { label: "Contact", href: "/contact" },
];

const Header = ({ navItems = defaultNavItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActivePath = (href) => pathname === href;

  const drawer = (
    <Box
      sx={{
        width: 250,
        pt: 2,
        height: "100%",
        backgroundColor: "var(--background-color)",
        color: "var(--text-color)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "var(--text-color)" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Button
              component={Link}
              href={item.href}
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                justifyContent: "flex-start",
                px: 3,
                py: 1.5,
                color: isActivePath(item.href)
                  ? "var(--primary-color)"
                  : "var(--text-color)",
                fontWeight: isActivePath(item.href) ? 600 : 400,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
          borderBottom: "1px solid var(--secondary-color)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "flex-end", minHeight: "64px" }}>
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActivePath(item.href)
                        ? "var(--primary-color)"
                        : "var(--text-color)",
                      fontWeight: isActivePath(item.href) ? 600 : 400,
                      textTransform: "none",
                      fontSize: "1rem",
                      minWidth: "auto",
                      position: "relative",
                      "&::after": isActivePath(item.href)
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "80%",
                            height: "2px",
                            background: "var(--gradient)",
                          }
                        : {},
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.05)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "var(--text-color)" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
