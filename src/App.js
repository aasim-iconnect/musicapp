import "./App.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const songs = [
    "Single Ladies (Put a Ring on It)",
    "Umbrella",
    "Shake it Off",
    "Toxic",
    "Rolling in the Deep",
    "Firework",
    "Rehab",
    "Blinding Lights",
  ];
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Hero songs={songs} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
