import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "./Components/Input/Input";
import Tracker from "./Components/Tracker/Tracker";
import { startClock } from "./redux/action/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => dispatch(startClock()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  const trackers = useSelector((store) => store.trackers);

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
