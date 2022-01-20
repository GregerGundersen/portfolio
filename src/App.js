import Header from "./components/Header/Header";
import { GlobalStyle } from "./App.styled";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
