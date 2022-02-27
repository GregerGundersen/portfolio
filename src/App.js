import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import { GlobalStyle } from "./App.styled";
// import { Skills } from "./components/Skills/Skills";
// import { Projects } from "./components/Projects/Projects";
// import { About } from "./components/About/About";
// import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <GlobalStyle />

        <Routes>
          <Route index element={<Home />} />
          <Route path="my-portfolio" element={<Portfolio />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact-me" element={<Contact />} />
        </Routes>
        {/* <Header></Header>
        <Skills></Skills>
        <Projects></Projects>
        <About></About>
        <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;
