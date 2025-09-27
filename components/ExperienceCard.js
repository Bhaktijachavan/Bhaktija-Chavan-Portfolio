"use client";

import React from "react";
import { Card, CardContent, Typography, Box, List, ListItem } from "@mui/material";

export default function ExperienceCard({ role, company, duration, responsibilities }) {
  return (
    <Card
      sx={{
        backgroundColor: "#1a1a1a",
        borderRadius: 2,
        mb: 3,
        border: "1px solid var(--primary-color)",
        "&:hover": { boxShadow: "0 0 20px var(--secondary-color)" },
      }}
    >
      <CardContent>
        <Typography variant="h6" className="gradient-text">
          {role} | {company}
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 1, color: "var(--secondary-color)" }}>
          {duration}
        </Typography>
        <List>
          {responsibilities.map((item, index) => (
            <ListItem key={index} sx={{ py: 0.5, fontSize: "0.9rem", color: "var(--text-color)" }}>
              • {item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
