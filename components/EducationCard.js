"use client";

import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

export default function EducationCard({ degree, institution, year, selected, onClick }) {
  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
        borderRadius: 2,
        border: "1px solid var(--primary-color)",
        "&:hover": { boxShadow: "0 0 20px var(--secondary-color)" },

      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          height: "100%",
          transition: "all 0.3s ease",
          ...(selected && {
            boxShadow: `
              0 0 10px var(--primary-color),
              0 0 20px var(--secondary-color),
              0 0 30px var(--primary-color)
            `,
          }),
        }}
      >
        <CardContent>
          <Typography variant="h6" className="gradient-text">
            {degree}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "var(--secondary-color)", mb: 1 }}>
            {institution}
          </Typography>
          <Typography variant="body2" sx={{ color: "var(--text-color)" }}>
            Year: {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
