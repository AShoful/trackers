import "./App.css";
import { useSelector } from "react-redux";

import Input from "./Components/Input/Input";
import Tracker from "./Components/Tracker/Tracker";

function App() {
  const trackers = useSelector((store) => store.trackers).sort(
    (a, b) => b.id - a.id
  );

  return (
    <div className="App">
      <h1>tracker</h1>
      <Input />
      {!trackers.length ? (
        <h3>Trackers list is empty</h3>
      ) : (
        trackers.map((tracker) => <Tracker key={tracker.id} id={tracker.id} />)
      )}
    </div>
  );
}

export default App;
