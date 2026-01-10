import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/Data";
import Footer from "@/components/Footer";

const Client = dynamic(() => import("@/components/Client"), {
  loading: () => null,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => null,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 bg-(--black-100)">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
