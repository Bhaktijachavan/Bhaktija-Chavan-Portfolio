"use client";

import React from "react";
import { Box, Tabs, Tab } from "@mui/material";

export default function SkillTabs({ categories, value, onChange }) {
  return (
    <Box sx={{ width: "100%", mb: 3, display: "flex", justifyContent: "center" }}>
      <Tabs
        value={value}
        onChange={onChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          "& .MuiTab-root": {
            color: "var(--text-color)",
            fontWeight: 600,
            minWidth: "auto",
            px: 2,
          },
          "& .Mui-selected": {
            color: "var(--secondary-color) !important",
          },
          "& .MuiTabs-indicator": {
            background: "var(--gradient)",
            height: "4px",
            borderRadius: "2px",
          },
        }}
      >
        {categories.map((cat, index) => (
          <Tab key={index} label={cat} />
        ))}
      </Tabs>
    </Box>
  );
}
