import siteData from "./siteData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      <Navbar data={siteData} />
      <main>
        <Hero data={siteData} />
        <About data={siteData} />
        <Projects data={siteData} />
        <Skills data={siteData} />
        <Contact data={siteData} />
      </main>
      <Footer data={siteData} />
    </div>
  );
}

export default App;
