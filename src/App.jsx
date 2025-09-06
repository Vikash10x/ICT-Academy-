import React from "react";

import { Navbar } from "./components/Navbar";
import { Hero_section } from "./components/Hero_section";
import { Announcements } from "./components/Announcements";
import { Content } from "./components/Content";
import { Theory_Section } from "./components/Theory_Section";
import { Card_section } from "./components/Card_section";
import { Progress } from "./components/Progress";
import { Event_schedule } from "./components/Event_schedule";
import { Table_Section } from "./components/Table_Section";
import { Wide_Section } from "./components/Wide_Section";
import { Last_Section } from "./components/Last_Section";
import { Footer } from "./components/Footer";
import { Top_Section } from "./components/Top_Section";

function App() {
  return (
    <>
      <div>
        <Top_Section />
        <Navbar />
        <Hero_section />
        <Announcements />
        <Content />
        <Theory_Section />
        <Card_section />
        <Progress />
        <Event_schedule />
        <Table_Section />
        <Wide_Section />
        <Last_Section />
        <Footer />
      </div>
    </>
  );
}

export default App;
