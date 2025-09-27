"use client";

import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import Title from "../../../../components/Title";

export default function About() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 4, sm: 6, md: 8 },
        mb: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Card
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
          boxShadow: 6,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Title title="About" className="gradient-text" />

          <Box sx={{ typography: "body1", lineHeight: 1.8, fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}>
            <Typography paragraph>
              Hi! I’m <strong>Bhaktija Pralhad Chavan</strong>, a dedicated Software Developer with over 1.6 years of experience in frontend development, specializing in React.js, Next.js, and WordPress. I’m passionate about building scalable, user-friendly web and e-commerce applications with a strong focus on UI/UX and performance.
            </Typography>

            <Typography paragraph>
              I have hands-on experience in JavaScript, TypeScript, Tailwind CSS, Material-UI, and modern frontend tools. I’m skilled in version control using Git and Bitbucket and have collaborated with remote teams to deliver high-quality solutions.
            </Typography>

            <Typography paragraph>
              Beyond coding, I excel in technical documentation, market research, project planning, and creative design using Canva, enabling me to produce visually appealing interfaces, posters, and social media content.
            </Typography>

            <Typography paragraph>
              I love turning ideas into real digital solutions—whether it’s a responsive website, an interactive web app, or an e-commerce platform. Let’s create something amazing together!
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
