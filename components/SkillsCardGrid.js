"use client";

import React, { useState } from "react";
import { Box, Card, CardContent, Typography, CardActionArea } from "@mui/material";

export default function SkillsCardGrid({ skills }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gap: 2,
        justifyItems: "center",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)", 
          md: "repeat(4, 1fr)", 
          lg: "repeat(5, 1fr)",
        },
      }}
    >
      {skills.map((skill, index) => (
        <Card
          key={index}
          sx={{
            width: "100%",
            borderRadius: 2,
            overflow: "hidden",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            "&:hover": {
              boxShadow: `
                0 0 10px var(--primary-color),
                0 0 20px var(--secondary-color),
                0 0 30px var(--primary-color)
              `,
            },
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            sx={{
              height: "100%",
              transition: "all 0.3s ease",
              ...(selectedCard === index && {
                boxShadow: `
                  0 0 10px var(--primary-color),
                  0 0 20px var(--secondary-color),
                  0 0 30px var(--primary-color)
                `,
              }),
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ fontWeight: 500 }}
              >
                {skill}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
