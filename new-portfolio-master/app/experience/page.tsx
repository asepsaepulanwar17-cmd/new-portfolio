"use client"

import SkillSection from "../components/experience/SkillSection";
import ProjectSection from "../components/experience/ProjectSection";
import ExperienceJourney from "../components/experience/ExperienceJourney";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090F] text-white">
      <ExperienceJourney />
      <SkillSection />
      <ProjectSection />
    </main>
  );
}