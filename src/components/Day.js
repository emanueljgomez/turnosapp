import Button from "./Button";
import ButtonExtra from "./ButtonExtra";

function Day() {
  const buttonAction = () => {
    alert("Bien capo, sabes leer... y usar un mouse");
  };

  return (
    <div class="card" style={{ width: 17 + "em" }}>
      <div class="card-header bg-dark">
        <h5 class="card-title" style={{ color: "white" }}>
          LUNES
        </h5>
      </div>
      <ul class="list-group list-group-flush">
        <div
          class="card-header"
          style={({ padding: 0 + "px" }, { margin: 0 + "px" })}
        >
          <h4>TURNO 1</h4>
          <p style={({ padding: 0 + "px" }, { margin: 0 + "px" })}>
            6:00 - 14:00
          </p>
        </div>
        <li class="list-group-item">
          <Button handleClick={buttonAction} />
          <ButtonExtra handleClick={buttonAction} />
        </li>
      </ul>
      <ul class="list-group list-group-flush">
        <div
          class="card-header"
          style={({ padding: 0 + "px" }, { margin: 0 + "px" })}
        >
          <h4>TURNO 2</h4>
          <p style={({ padding: 0 + "px" }, { margin: 0 + "px" })}>
            14:00 - 22:00
          </p>
        </div>
        <li class="list-group-item">
          <Button handleClick={buttonAction} />
          <ButtonExtra handleClick={buttonAction} />
        </li>
      </ul>
      <ul class="list-group list-group-flush">
        <div
          class="card-header"
          style={({ padding: 0 + "px" }, { margin: 0 + "px" })}
        >
          <h4>TURNO 3</h4>
          <p style={({ padding: 0 + "px" }, { margin: 0 + "px" })}>
            22:00 - 6:00
          </p>
        </div>
        <li class="list-group-item">
          <Button handleClick={buttonAction} />
          <ButtonExtra handleClick={buttonAction} />
        </li>
      </ul>
    </div>
  );
}

export default Day;
