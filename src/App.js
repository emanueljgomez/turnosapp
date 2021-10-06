import "./App.css";
import Button from "./components/Button";

function App() {
  const buttonAction = () => {
    alert("Bien capo, sabes leer... y usar un mouse");
  };

  return (
    <div className="App">
      <Button handleClick={buttonAction} />
    </div>
  );
}

export default App;
