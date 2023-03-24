import { Link, Route, Routes } from "react-router-dom";
import EncuestaForm from "./pages/EncuestaForm";
import "./App.scss";
import Encuestas from "./pages/Encuestas";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<EncuestaForm />} />
        <Route path="/encuestas" element={<Encuestas />} />
      </Routes>
    </Navbar>
  );
}

export default App;
