"use client";

import React, { useState } from "react";
import { Container } from "@mui/material";
import SkillTabs from "../../../../components/SkillTabs";
import SkillsCardGrid from "../../../../components/SkillsCardGrid";
import Title from "../../../../components/Title";

export default function SkillsTabsCards() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const skills = {
    Frontend: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material-UI",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Redux",
      "Next.js",
      "WordPress",
    ],
    // Backend: [ "Node.js", "Express.js"],
    DataBase: ["MongoDB", "SQL"],
    Tools: ["Git", "GitHub", "Bitbucket", "VS Code", "Postman", "Cursor"],
    Design: [
      "UI/UX Design",
      "Wireframes",
      "Functional Documentation",
      "Data Flow Diagrams",
      "ERDs",
      "Canva Designs",
    ],
    Methodologies: ["Agile Foundations", "Market Research Foundations"],
  };

  const categories = Object.keys(skills);

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Title title="Technologies I know" className="gradient-text" />
      {/* Tabs */}
      <SkillTabs categories={categories} value={value} onChange={handleChange} />
      {/* Skill Cards */}
      <SkillsCardGrid skills={skills[categories[value]]} />
    </Container>
  );
}
