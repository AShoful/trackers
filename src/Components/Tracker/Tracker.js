import React from "react";
import "./Tracker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTracker,
  stopTracker,
  startTracker,
} from "../../redux/action/action";

const format = (t) =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;
const pad = (n) => (n < 10 ? `0${n}` : n);

const Tracker = ({ id }) => {
  const dispatch = useDispatch();
  const removeTracker = (id) => dispatch(deleteTracker(id));

  const tracker = useSelector((state) =>
    state.trackers.filter((item) => item.id === id)
  )[0];
  const tick = useSelector((store) => store.tick);

  const valueClock = tick - tracker.timeStart + tracker.currentTrackValue;

  const valueTrack = tracker.isStarted
    ? format(new Date(valueClock))
    : format(new Date(tracker.currentTrackValue));

  const handleStopTraker = (id, value) => {
    dispatch(stopTracker(id, value));
  };

  const handleStartTracker = (id) => {
    dispatch(startTracker(id));
  };

  const handleClick = tracker.isStarted ? handleStopTraker : handleStartTracker;

  const icon = (
    <span
      className="material-icons"
      onClick={() => handleClick(id, valueClock)}
    >
      {!tracker.isStarted ? "play_circle_outline" : "pause_circle_outline"}
    </span>
  );

  const del = (
    <span className="material-icons" onClick={() => removeTracker(id)}>
      remove_circle_outline
    </span>
  );

  return (
    <div className="tracker_p">
      {tracker.name}
      {valueTrack}
      {icon}
      {del}
    </div>
  );
};

export default Tracker;
