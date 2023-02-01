import "./reset.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
