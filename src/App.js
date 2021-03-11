import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "./Components/Input/Input";
import Tracker from "./Components/Tracker/Tracker";
import { startClock } from "./redux/action/action";

function App() {
  const dispatch = useDispatch();
  const trackers = useSelector((store) => store.trackers);

  useEffect(() => {
    let timer;
    const activeTrackers = trackers.filter((tracker) => tracker.isStarted);
    if (activeTrackers.length) {
      timer = setInterval(() => dispatch(startClock()), 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, trackers]);

  return (
    <div className="App">
      <p>tracker</p>
      <Input />
      {!trackers.length
        ? "Trackers list is empty"
        : trackers.map((tracker, i) => (
            <Tracker key={tracker.id} id={tracker.id} />
          ))}
    </div>
  );
}

export default App;
