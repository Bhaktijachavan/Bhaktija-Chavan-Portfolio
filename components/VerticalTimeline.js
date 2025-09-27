"use client";

import React from "react";
import { Box, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function VerticalTimeline({ items }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 900,
        margin: "auto",
        padding: "2rem 1rem",
        "&::before": {
          content: '""',
          position: "absolute",
          left: isMobile ? 16 : "50%",
          top: 0,
          bottom: 0,
          width: "2px",
          bgcolor: "primary.main",
          transform: isMobile ? "none" : "translateX(-50%)",
        },
      }}
    >
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "flex-start" : isLeft ? "flex-end" : "flex-start",
                position: "relative",
                mb: 8,
                px: isMobile ? 2 : 0,
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: isMobile ? 10 : "50%",
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  border: "3px solid white",
                  transform: isMobile ? "none" : "translateX(-50%)",
                  zIndex: 1,
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
              />

              {/* Content card */}
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  width: isMobile ? "90%" : "45%",
                  borderRadius: 3,
                  bgcolor: "background.paper",
                  ...(isMobile ? { ml: 6 } : isLeft ? { mr: 4 } : { ml: 4 }),
                  "&:hover": {
                    transform: "scale(1.03)",
                    transition: "0.3s ease-in-out",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "primary.main", mb: 1 }}
                >
                  {item.label}
                </Typography>
                <Box>{item.content}</Box>
              </Paper>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
}
