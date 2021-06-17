import { Header } from './Components/Header';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="App h-screen overflow-y-scroll scroll" style={{
      scrollBehavior: 'smooth'
    }}>
      <Header />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
