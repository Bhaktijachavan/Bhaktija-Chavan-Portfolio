"use client";

import { Card, CardContent, CardMedia, Typography, Button, Stack, Box } from "@mui/material";
import Link from "next/link";

export default function ProjectCard({ name, image, description, role, tech, github, demo }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        overflow: "hidden",
        margin: "20px 0",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: `
            0 0 10px var(--primary-color),
            0 0 20px var(--secondary-color),
            0 0 30px var(--primary-color)
          `,
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "auto",
          maxHeight: { xs: 220, md: 300 },
          objectFit: "cover",
          borderRadius: { xs: "16px 16px 0 0", md: "16px 0 0 16px" },
        }}
      />

      {/* Content */}
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              background: "var(--text-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {name}
          </Typography>

          <Typography variant="body2" sx={{ mb: 1, color: "var(--text-color)" }}>
            {description}
          </Typography>

          <Typography variant="caption" sx={{ display: "block", mb: 1, color: "var(--text-color)" }}>
            <strong>Role:</strong> {role}
          </Typography>

          <Typography variant="caption" sx={{ display: "block", mb: 2, color: "var(--text-color)" }}>
            <strong>Tech Stack:</strong> {tech.join(", ")}
          </Typography>
        </Box>

        {/* Buttons */}
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {github && (
            <Link href={github} target="_blank">
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "var(--primary-color)",
                  color: "var(--primary-color)",
                  "&:hover": {
                    borderColor: "var(--secondary-color)",
                    color: "var(--secondary-color)",
                  },
                }}
              >
                GitHub
              </Button>
            </Link>
          )}
          {demo && (
            <Link href={demo} target="_blank">
              <Button
                variant="contained"
                size="small"
                sx={{
                  background: "var(--gradient)",
                  color: "#fff",
                  "&:hover": { opacity: 0.9 },
                }}
              >
                Live Demo
              </Button>
            </Link>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
