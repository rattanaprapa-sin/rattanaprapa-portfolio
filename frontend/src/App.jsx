import { IntroSection } from './modules/intro';
import { AboutMe } from './modules/about';
import { SkillSet } from './modules/skills';
import { Background } from './modules/background';
import { ProjectList } from './modules/projects';
import { ContactForm } from './modules/contact';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <AboutMe />
      <SkillSet />
      <Background />
      <ProjectList />
      <ContactForm />
      <ScrollToTop />
    </div>
  )
}

export default App
