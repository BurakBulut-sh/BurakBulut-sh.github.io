'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Competencies from '@/components/Competencies';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Competencies />
        <Experience />
        <Projects />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
