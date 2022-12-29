import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscription from "./components/Subscription";
import Pricing from "./components/Pricing";
import Program from "./components/Program";
import Footer from "./components/Footer";



 function App(){
  return <div className="App">
    <Header />
    <main>
    <Hero />
    <About />
    <Program />
    <Pricing />
    <Subscription />
    <Footer />
    
    </main>
   
  </div>
 }

 export default App;
