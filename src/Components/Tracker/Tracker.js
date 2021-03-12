import React from "react";
import "./Tracker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTracker,
  stopTracker,
  startTracker,
} from "../../redux/action/action";

const format = (t) =>
  `${pad(Math.floor(t / 1000 / 60 / 60))}:${pad(t.getUTCMinutes())}:${pad(
    t.getUTCSeconds()
  )}`;
const pad = (n) => (n < 10 ? `0${n}` : n);

const Tracker = ({ id }) => {
  const dispatch = useDispatch();
  const removeTracker = (id) => dispatch(deleteTracker(id));
  const tracker = useSelector((state) =>
    state.trackers.filter((item) => item.id === id)
  )[0];
  const tick = useSelector((store) => store.tick);
  const checkStart = tracker.isStarted;

  const name =
    tracker.name.length > 20 ? tracker.name.slice(0, 17) + "..." : tracker.name;

  const valueTrack = tick - tracker.timeStart + tracker.currentTrackValue;

  const valueTrackAfterFormat = checkStart
    ? format(new Date(valueTrack))
    : format(new Date(tracker.currentTrackValue));

  const handleStopTraker = (id, value) => {
    dispatch(stopTracker(id, value));
  };

  const handleStartTracker = (id) => {
    dispatch(startTracker(id));
  };

  const handleClick = checkStart ? handleStopTraker : handleStartTracker;

  return (
    <div className={checkStart ? "tracker green" : "tracker red"}>
      <div className="tracker_panel">
        <span className="tracker_name">{name}</span>
        <span>{valueTrackAfterFormat}</span>
        <span
          className="material-icons"
          onClick={() => handleClick(id, valueTrack)}
        >
          {!checkStart ? "play_circle_outline" : "pause_circle_outline"}
        </span>
      </div>
      <span className="material-icons" onClick={() => removeTracker(id)}>
        remove_circle_outline
      </span>
    </div>
  );
};

export default Tracker;
