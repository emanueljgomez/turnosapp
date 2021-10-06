import "./App.css";
import Day from "./components/Day";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <Day day="LUNES" />
          </div>
          <div class="p-2 bd-highlight">
            <Day day="MARTES" />
          </div>
          <div class="p-2 bd-highlight">
            <Day day="MIERCOLES" />
          </div>
          <div class="p-2 bd-highlight">
            <Day day="JUEVES" />
          </div>
          <div class="p-2 bd-highlight">
            <Day day="VIERNES" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
