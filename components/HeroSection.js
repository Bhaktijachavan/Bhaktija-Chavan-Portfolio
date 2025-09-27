"use client";

import {  Card, CardContent, Typography, Box } from "@mui/material";

export default function HeroSection({ title, description, subtitle }) {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: { xs: "20px", sm: "30px", md: "100px" },
        margin: { xs: "15px", sm: "25px", md: "35px" },
        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(245, 158, 11, 0.05) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "24px",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 30px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
          transition: "left 0.5s ease",
        },
        "&:hover::before": {
          left: "100%",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "200%",
          height: "200%",
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
          `,
          animation: "floatShapes 8s ease-in-out infinite",
          zIndex: 0,
        },
      }}
    >
      <CardContent sx={{ position: "relative", zIndex: 1, padding: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 3, md: 5 },
          }}
        >
          {/* Left Side - Enhanced Title */}
          {/* Left Side - Title + Subtitle */}
          <Box
            sx={{
              flex: { xs: "unset", md: 1 },
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 800,
                background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #f59e0b 100%)",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradientShift 4s ease infinite",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: { xs: "50%", md: "0" },
                  transform: { xs: "translateX(-50%)", md: "none" },
                  width: "60px",
                  height: "4px",
                  background: "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                  borderRadius: "2px",
                  animation: "expandLine 2s ease-out 0.5s forwards",
                  transform: "scaleX(0)",
                  transformOrigin: { xs: "center", md: "left" },
                },
              }}
            >
              {title}
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                fontWeight: 600,
                background: "linear-gradient(135deg, #06b6d4 0%, #f59e0b 100%)",
                backgroundSize: "200% 200%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradientShift 4s ease infinite",
              }}
            >
              {subtitle}
            </Typography>
          </Box>


          {/* Right Side - Enhanced Description + Button */}
          <Box
            sx={{
              flex: { xs: "unset", md: 2 },
              textAlign: { xs: "center", md: "right" },
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "var(--text-color, #e4e4e7)",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                lineHeight: 1.6,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: { xs: "50%", md: "100%" },
                  top: 0,
                  transform: { xs: "translateX(-50%)", md: "translateX(-100%)" },
                  width: "3px",
                  height: "100%",
                  borderRadius: "2px",
                  opacity: 0.6,
                },
              }}
            >
              {description}
            </Typography>

          </Box>
        </Box>
      </CardContent>

      {/* Add keyframes for animations */}
      <style jsx global>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes expandLine {
          to { transform: scaleX(1); }
        }
        
        @keyframes floatShapes {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(0.9); }
          75% { transform: rotate(270deg) scale(1.05); }
        }
      `}</style>
    </Card>
  );
}