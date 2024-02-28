import CreazioneCommento from "./Components/CreazioneCommento";
import "./App.css";
import CancellazioneCommenti from "./Components/CancellazioneCommenti";
import AggiornaCommento from "./Components/AggiornaCommento";
function App() {
  return (
    <div className="App">
      <CreazioneCommento></CreazioneCommento>
      <CancellazioneCommenti></CancellazioneCommenti>
      <AggiornaCommento></AggiornaCommento>
    </div>
  );
}

export default App;
