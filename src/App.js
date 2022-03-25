import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Homepage";
import Citas from "./pages/Citas/Citas";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.jsx";
import Consulta from "./pages/Consulta/Consulta";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <div>
      <ContextProvider>
        <Header />
        <Routes>
          <Route exact path="/consultorio" element={<HomePage />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/citas" element={<Citas />} />
        </Routes>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
