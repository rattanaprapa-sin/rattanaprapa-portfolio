import React from 'react';
import { IntroSection } from '../../modules/intro';
import { AboutMe } from '../../modules/about';
import { SkillSet } from '../../modules/skills';
import { Background } from '../../modules/background';
import { ProjectList } from '../../modules/projects';
import { ContactForm } from '../../modules/contact';

const HomePage = () => {
  return (
    <main>
      <IntroSection />
      <AboutMe />
      <SkillSet />
      <Background />
      <ProjectList />
      <ContactForm />
    </main>
  );
};

export default HomePage;
