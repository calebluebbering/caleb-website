import TempPage from "@/app/legacy/page"
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ExperienceBoard from "@/components/home/ExperienceBoard";

export default function Page() {
  return (
    <main className="home">
      <Hero />
      <ExperienceBoard />
    </main>
  );
}