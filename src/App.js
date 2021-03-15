import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Input from "./Components/Input/Input";
import Tracker from "./Components/Tracker/Tracker";
import { startTick } from "./redux/action/action";

function App() {
  const dispatch = useDispatch();
  const trackers = useSelector((store) => store.trackers).sort(
    (a, b) => b.id - a.id
  );

  useEffect(() => {
    const timer = setInterval(() => dispatch(startTick()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch, trackers]);

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
