import "./App.css";
import Calc from "./components/Calc/Calc";
import Display from "./components/Display/Display";

function App() {
  return (
    <div id="appWrap">
      <div id="splitterContainer">
        <p>SPLI</p>
        <p>TTER</p>
      </div>
      <Calc />
      <Display />
    </div>
  );
}

export default App;
