import { Header } from './Components/Header';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Introduction } from './Components/Introduction';

function App() {
  return (
    <div className="App h-screen overflow-y-scroll scroll" style={{
      scrollBehavior: 'smooth'
    }}>
      <Header />
      <Introduction />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
