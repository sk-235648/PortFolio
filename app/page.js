import Image from "next/image";
import HomePage from "@/components/HomePage";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactPage from "@/components/ContactPage";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutSection />
      <SkillSection />
      <ProjectCarousel/>
      <ContactPage />
    </>
  );
}
