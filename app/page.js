"use client";
import { useEffect } from "react";
import Hero from "@/components/Home/Hero";
import FeaturesSection from "@/components/Home/FeaturesSection";
import AboutSection from "../components/Home/AboutSection";
import HomeCourses from "../components/Home/HomeCourses";
import Testimonials from "../components/Home/Testimonials";
import ContactCTC from "../components/Home/ContactCTC";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out-sine",
          delay: 100,
          once: true,
        });
      });
    }
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <HomeCourses />
      <Testimonials />
      <ContactCTC />
    </>
  );
}
