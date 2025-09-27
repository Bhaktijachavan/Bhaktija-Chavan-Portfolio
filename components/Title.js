"use client";

import React from "react";
import { Typography } from "@mui/material";

const Title = ({
  title,
  variant = "h4",
  align = "center",
  fontWeight = 700,
  mb = { xs: 2, sm: 3, md: 4 },
  fontSize = { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
  className = "",
}) => {
  return (
    <Typography
      variant={variant}
      align={align}
      gutterBottom
      className={className}
      sx={{
        mb,
        fontSize,
        fontWeight,
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
