import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscription from "./components/Subscription";
import Pricing from "./components/Pricing";
import Program from "./components/Program";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/SignUp";


function App() {
  return <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<main>
          <Hero />
          <About />
          <Program />
          <Pricing />
          <Subscription />
        </main>} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <Footer />
    </Router>

  </div>
}

export default App;
