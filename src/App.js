import "./App.css";
import Day from "./components/Day";

export const employees = [];
export const monthDays = [];

function App() {
  class employee {
    constructor(
      id,
      name,
      hoursTotal,
      extrasTotal,
      mondayShiftTaken,
      tuesdayShiftTaken,
      wednesdayShiftTaken,
      thursdayShiftTaken,
      fridayShiftTaken,
      mondayExtraTaken,
      tuesdayExtraTaken,
      wednesdayExtraTaken,
      thursdayExtraTaken,
      fridayExtraTaken
    ) {
      this.id = id;
      this.name = name;
      this.hoursTotal = hoursTotal;
      this.extrasTotal = extrasTotal;
      this.mondayShiftTaken = mondayShiftTaken;
      this.tuesdayShiftTaken = tuesdayShiftTaken;
      this.wednesdayShiftTaken = wednesdayShiftTaken;
      this.thursdayShiftTaken = thursdayShiftTaken;
      this.fridayShiftTaken = fridayShiftTaken;
      this.mondayExtraTaken = mondayExtraTaken;
      this.tuesdayExtraTaken = tuesdayExtraTaken;
      this.wednesdayExtraTaken = wednesdayExtraTaken;
      this.thursdayExtraTaken = thursdayExtraTaken;
      this.fridayExtraTaken = fridayExtraTaken;
    }
  }

  employees[1] = new employee(
    1,
    "Juan Carlos Hardcode",
    0,
    0,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  );

  class workday {
    constructor(shiftOne, shiftTwo, shiftThree) {
      this.shiftOne = shiftOne;
      this.shiftTwo = shiftTwo;
      this.shiftThree = shiftThree;
    }
  }

  for (let i = 0; i < 30; i++) {
    monthDays[i] = new workday(2, 2, 2);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <Day day="LUNES" />
          </div>
          <div className="p-2 bd-highlight">
            <Day day="MARTES" />
          </div>
          <div className="p-2 bd-highlight">
            <Day day="MIERCOLES" />
          </div>
          <div className="p-2 bd-highlight">
            <Day day="JUEVES" />
          </div>
          <div className="p-2 bd-highlight">
            <Day day="VIERNES" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
