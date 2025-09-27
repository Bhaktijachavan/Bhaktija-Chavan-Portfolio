"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import EducationCard from "./../../../../components/EducationCard";
import Title from "../../../../components/Title";

const educationData = [
  { degree: "M.C.A", institution: "Sanjay Godawat University, Kolhapur", year: 2023 },
  { degree: "B.C.A", institution: "Vivekanand College, Kolhapur", year: 2021 },
  { degree: "H.S.C", institution: "Balwantrao Yadav Jr. College, Peth Vadgaon", year: 2018 },
  { degree: "S.S.C", institution: "Balwantrao Yadav High School, Peth Vadgaon", year: 2016 },
];

export default function Education() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        width: "100%",
      }}
    >
      {/* Title */}
      <Title title="My Education" className="gradient-text" />
      {/* Using Flexbox (Recommended) */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: { xs: "wrap", md: "nowrap" }, 
          "& > *": {
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" }, 
            minWidth: 0, 
          }
        }}
      >
        {educationData.map((edu, idx) => (
          <EducationCard
            key={idx}
            {...edu}
            selected={selectedCard === idx}
            onClick={() => setSelectedCard(idx)}
          />
        ))}
      </Box>
    </Box>
  );
}