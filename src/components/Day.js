import { employees, monthDays } from "../App";
import Button from "./Button";
import ButtonExtra from "./ButtonExtra";

function Day({ day }) {
  const takeFirstShift = () => {
    if (employees[1].mondayShiftTaken === true) {
      alert(`¡Ya tienes un turno de 8 hs. asignado!`);
    } else {
      employees[1].mondayShiftTaken = true;
      alert(`Has tomado el Turno 1 del día Lunes`);
    }
  };

  return (
    <div className="card" style={({ width: 17 + "em" }, { margin: 4 + "px" })}>
      <div className="card-header bg-dark">
        <h5 className="card-title" style={{ color: "white" }}>
          {day}
        </h5>
        <h8 className="card-title" style={{ color: "white" }}>
          Turno tomado: 1<br />
          Horas extra: 4
        </h8>
      </div>
      <ul className="list-group list-group-flush">
        <div
          className="card-header"
          style={({ padding: 0 + "px" }, { margin: 0 + "px" })}
        >
          <h4>TURNO 1</h4>
          <p style={({ padding: 0 + "px" }, { margin: 0 + "px" })}>
            6:00 - 14:00
          </p>
        </div>
        <li className="list-group-item">
          <Button handleClick={takeFirstShift} />
          <ButtonExtra handleClick={takeFirstShift} />
        </li>
      </ul>
      <ul className="list-group list-group-flush">
        <div
          className="card-header"
          style={({ padding: 0 + "px" }, { margin: 0 + "px" })}
        >
          <h4>TURNO 2</h4>
          <p style={({ padding: 0 + "px" }, { margin: 0 + "px" })}>
            14:00 - 22:00
          </p>
        </div>
        <li className="list-group-item">
          <Button handleClick={takeFirstShift} />
          <ButtonExtra handleClick={takeFirstShift} />
        </li>
      </ul>
      <ul className="list-group list-group-flush">
        <div
          className="card-header"
          style={({ padding: 0 + "px" }, { margin: 0 + "px" })}
        >
          <h4>TURNO 3</h4>
          <p style={({ padding: 0 + "px" }, { margin: 0 + "px" })}>
            22:00 - 6:00
          </p>
        </div>
        <li className="list-group-item">
          <Button handleClick={takeFirstShift} />
          <ButtonExtra handleClick={takeFirstShift} />
        </li>
      </ul>
    </div>
  );
}

export default Day;
