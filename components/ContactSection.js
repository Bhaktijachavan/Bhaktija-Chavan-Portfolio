"use client";

import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

export default function ContactSection({
  heading = "Ready to Go Digital? Let’s Build Something Amazing!",
  intro = "Have a project in mind, want to collaborate, or looking to hire a passionate Software Developer? Feel free to reach out—let’s turn your ideas into reality. I’m also open to exciting job opportunities!",
  name = "Bhaktija Chavan",
  email = "bhaktijachavan0717@gmail.com",
  linkedin = "#",
  github = "#",
  resume = "#", 
}) {
  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        backgroundColor: "rgba(255,255,255,0.05)",
      }}
    >
      {/* Heading */}
      <Typography
        component="h2"
        className="gradient-text"
        sx={{
          textAlign: "center",
          mb: 2,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
          fontWeight: 700,
        }}
      >
        {heading}
      </Typography>

      {/* Intro Text */}
      <Typography
        sx={{
          textAlign: "center",
          mb: 4,
          color: "var(--secondary-color)",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {intro}
      </Typography>

      {/* Contact Info */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
          Name: {name}
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
          Email: {email}
        </Typography>
      </Box>

      {/* Resume Download Button */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Button
          variant="contained"
          sx={{
            background: "var(--gradient)",
            color: "#fff",
            borderRadius: "30px",
            px: { xs: 2, sm: 3 },
            py: { xs: 0.8, sm: 1 },
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            fontWeight: 600,
            "&:hover": { opacity: 0.9, color: "#fff" },
          }}
          startIcon={<DownloadIcon />}
          component="a"
          href={resume}
          target="_blank"
          download
        >
          Download Resume
        </Button>
      </Box>

      {/* Social Links */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            mb: { xs: 1, sm: 0 },
          }}
        >
          Connect with me on LinkedIn or check out my projects on GitHub.
        </Typography>
        <Stack direction="row" spacing={2}>
          <IconButton
            component={Link}
            href={linkedin}
            target="_blank"
            sx={{
            background: "var(--gradient)",
            color: "#fff",
            borderRadius: "30px",
            px: { xs: 2, sm: 3 },
            py: { xs: 0.8, sm: 1 },
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            fontWeight: 600,
            "&:hover": { opacity: 0.9, color: "#fff" },
          }}
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            component={Link}
            href={github}
            target="_blank"
            sx={{
            background: "var(--gradient)",
            color: "#fff",
            borderRadius: "30px",
            px: { xs: 2, sm: 3 },
            py: { xs: 0.8, sm: 1 },
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            fontWeight: 600,
            "&:hover": { opacity: 0.9, color: "#fff" },
          }}
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
