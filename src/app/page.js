"use client";

import HeroSection from "../../components/HeroSection";
import Education from "./screen/educatione/page";
import Projects from "./screen/projects/page";
import SkillsTabs from "./screen/skills/page";
import Experience from './screen/experience/page';

export default function Home() {
  return (
    <main className="background-color">
      <section>
        <HeroSection
          title="Hi, I’m Bhaktija Chavan "
          subtitle="Software Developer"
          description="I design and develop web applications with modern technologies."
        />
      </section>

      <section>
        <SkillsTabs />
      </section>

      <section>
        <Projects limit={2} />
      </section>

      <section>
        <Education />
      </section>
      
      <section>
        <Experience />
      </section>
    </main>
  );
}
