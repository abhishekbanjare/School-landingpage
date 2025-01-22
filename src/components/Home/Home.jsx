import React from "react";
import BannerSection from "./BannerSection";
import PrincipalMessage from "./PrincipalMessage";
import Welcome from "./Welcome";
import Facilities from "./Facilities";
import Faculties from "../customeComponents/faculties/Faculties";
import Gallery from "./Gallery";
import WhyChooseUs from "../customeComponents/whyChooseUs/WhyChooseUs";
import EventsSection from "../customeComponents/eventsSection/EventsSection";
import Courses from "../courses/Courses";
import SchoolNotes from "../schoolNote/SchoolNotes";
import DirectorSection from "./DirectorSection";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <SchoolNotes />
      <Welcome />
      <PrincipalMessage />
      <DirectorSection/>
      <Facilities />
      <Courses />
      <WhyChooseUs />
      {/* <Faculties /> */}
      {/* <Gallery /> */}
      <EventsSection />
    </div>
  );
}
