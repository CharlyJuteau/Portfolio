import "./reset.css";
import "./App.css";
import Toastify from "@components/Toastify/ToastifyContainer";
import Footer from "@components/Footer/Footer";
// import Stack from "@pages/Stack/Stack";
import Home from "./pages/Home/Home";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <Project />
      {/* <Stack /> */}
      <Contact />
      <Footer />
      <Toastify />
    </div>
  );
}

export default App;
