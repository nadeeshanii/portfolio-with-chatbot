import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Home />
      <Footer />
      <Chatbot />
    </div>
    
  );
}

export default App;
