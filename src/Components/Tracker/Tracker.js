import React from "react";
import "./Tracker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTracker,
  stopTracker,
  startTracker,
} from "../../redux/action/action";
import { format } from "./format";

const Tracker = ({ id, isTick }) => {
  const dispatch = useDispatch();
  const { name, start, time, isStarted } = useSelector((state) =>
    state.trackers.filter((item) => item.id === id)
  )[0];

  const tick = useSelector((store) => store.tick);

  const trackName = name.length > 10 ? name.slice(0, 7) + "..." : name;

  const valueTrack = tick - start + time;

  const valueTrackAfterFormat = isStarted
    ? format(new Date(valueTrack))
    : format(new Date(time));

  return (
    <div className={isStarted ? "Tracker active" : "Tracker"}>
      <div className="Tracker_panel">
        <span className="Tracker_name">{trackName}</span>
        <span>{valueTrackAfterFormat}</span>
        {!isStarted ? (
          <span
            className="material-icons button"
            onClick={() =>
              dispatch(startTracker(id, isTick ? tick : Date.now()))
            }
          >
            play_circle_outline
          </span>
        ) : (
          <span
            className="material-icons button"
            onClick={() => dispatch(stopTracker(id, valueTrack))}
          >
            pause_circle_outline
          </span>
        )}
      </div>
      <span
        className="material-icons button delete"
        onClick={() => dispatch(deleteTracker(id))}
      >
        remove_circle_outline
      </span>
    </div>
  );
};

export default Tracker;
