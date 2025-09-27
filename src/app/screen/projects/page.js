"use client";

import { Box, Button, Stack } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard";
import { useRouter } from "next/navigation";
import Title from "../../../../components/Title";

const projects = [
  {
    name: "Portfolio Website",
    image: "/images/portfolio.jpg",
    description:
      "A fully responsive personal portfolio website showcasing skills, projects, and experience. "
      + "It highlights professional achievements with a clean, modern UI design. "
      + "Includes sections for About, Skills, Projects, and Contact with smooth navigation. "
      + "Optimized for performance and accessibility.",
    role: "Designed UI, implemented pages, integrated contact form.",
    tech: ["Next.js", "Material-UI", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-demo.com",
  },
  {
    name: "Task Manager",
    image: "/images/taskmanager.jpg",
    description:
      "A collaborative task management tool for individuals and teams to manage projects efficiently. "
      + "Features task creation, updates, and progress tracking with deadlines and priorities. "
      + "Includes user authentication, role-based access, and real-time status updates. "
      + "Helps teams stay organized and productive with a clear project overview.",
    role: "Built task CRUD operations and authentication system.",
    tech: ["Next.js", "Express.js", "MongoDB"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://your-taskmanager-demo.com",
  },
  {
    name: "Home Inspection Software",
   image: "https://via.placeholder.com/800x600.png?text=Home+Inspection+Software",
    description:
      "A desktop software solution designed for home inspections with customizable templates for 1BHK and 2BHK. "
      + "Includes menu, submenu, selection panel, and damage panel to streamline inspection reporting. "
      + "Features 'Edit Template' functionality, making it flexible for different property types. "
      + "Ensures efficiency and accuracy in generating structured inspection reports.",
    role: "Developed template system and integrated inspection features.",
    tech: ["Electron.js", "React.js", "Node.js"],
    github: "https://github.com/yourusername/macj",
    demo: "https://your-macj-demo.com",
  },
];

export default function Projects({ limit }) {
  const router = useRouter();
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Title title="Projects" className="gradient-text" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Box>

      {limit && projects.length > limit && (
        <Stack alignItems="center" mt={4}>
          <Button
            variant="contained"
            size="small"
            sx={{
              background: "var(--gradient)",
              color: "#fff",
              "&:hover": { opacity: 0.9 },
            }}
            onClick={() => router.push("/screen/projects")}
          >
            View All Projects
          </Button>
        </Stack>
      )}
    </Box>
  );
}
