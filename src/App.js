import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Porfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/*!--SECTION-1-->*/}
        <Hero />
        {/*!--SECTION-2-->*/}
        <About />
        {/*!--SECTION-3-->*/}
        <Portfolio />
        {/*!--SECTION-4-->*/}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
