import "./App.css";
import Favorites from "./components/favorites/Favorites";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Favorites />
      <Footer />
    </div>
  );
}

export default App;
