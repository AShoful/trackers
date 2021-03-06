import "./App.css";
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
  const trackerIsRun = trackers.filter((tracker) => tracker.isStarted);

  useInterval(() => dispatch(startTick()), trackerIsRun.length ? 1000 : null);

  return (
    <div className="App">
      <h1>trackers</h1>
      <Input />
      {!trackers.length ? (
        <h3>Trackers list is empty</h3>
      ) : (
        trackers.map((tracker) => (
          <Tracker
            key={tracker.id}
            isTick={trackerIsRun.length}
            id={tracker.id}
          />
        ))
      )}
    </div>
  );
}

export default App;
