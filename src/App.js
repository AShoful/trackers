import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "./Components/Input/Input";
import Tracker from "./Components/Tracker/Tracker";
import { startTick } from "./redux/action/action";
import { useInterval } from "./hooks/useInterval";

function App() {
  const dispatch = useDispatch();
  const trackers = useSelector((store) => store.trackers).sort(
    (a, b) => b.id - a.id
  );

  useInterval(() => dispatch(startTick()), 1000);

  return (
    <div className="App">
      <h1>trackers</h1>
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
