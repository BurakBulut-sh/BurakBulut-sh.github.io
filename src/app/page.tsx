'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Competencies from '@/components/Competencies';
import Publications from '@/components/Publications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF9F5] text-[#141413]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Competencies />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
