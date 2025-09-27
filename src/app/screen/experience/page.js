"use client";

import React from "react";
import { Container, Box } from "@mui/material";
import ExperienceCard from "../../../../components/ExperienceCard";
import Title from "../../../../components/Title";

const experiences = [
  {
    role: "Software Developer I",
    company: "AariyaTech",
    duration: "Feb 2025 – Present",
    responsibilities: [
      "Conducting market research to drive data-backed development decisions.",
      "Working on scalable frontend solutions using Next.js for performance optimization.",
      "Developed and managed e-commerce websites using WordPress, including theme customization and plugin integration.",
      "Utilized WooCommerce to implement product listings, shopping cart.",
      "Version control and collaborative development using Bitbucket.",
      "Contributing to feature enhancements and performance tuning in ongoing product development cycles.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "VirtueByte Pvt. Ltd",
    duration: "Dec 2023 – Jan 2025",
    responsibilities: [
      "Developed frontend features using React.js, Redux, and REST APIs.",
      "Implemented UI components with Material-UI for responsive and user-friendly interfaces.",
      "Collaborated with backend teams to integrate APIs and ensure smooth data flow.",
      "Contributed to functional documentation, data flow diagrams, and wireframe designs.",
    ],
  },
];

export default function Experience() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Title title="My Experience" className="gradient-text" />
      <Box>
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </Box>
    </Container>
  );
}
