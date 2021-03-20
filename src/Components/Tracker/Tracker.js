import React from "react";
import "./Tracker.css";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteTracker,
  stopTracker,
  startTracker,
  startTick,
} from "../../redux/action/action";
import { useInterval } from "../../hooks/useInterval";
import { format } from "./format";

const Tracker = ({ id }) => {
  const dispatch = useDispatch();
  const { name, time, isStarted, start } = useSelector((state) =>
    state.trackers.filter((item) => item.id === id)
  )[0];
  const trackName = name.length > 10 ? name.slice(0, 7) + "..." : name;

  useInterval(
    () => dispatch(startTick(id, Date.now() - start)),
    isStarted ? 1000 : null
  );

  return (
    <div className={isStarted ? "Tracker start" : "Tracker"}>
      <div className="Tracker_panel">
        <span className="Tracker_name">{trackName}</span>
        <span>{format(time)}</span>
        {!isStarted ? (
          <span
            className="material-icons button"
            onClick={() => dispatch(startTracker(id))}
          >
            play_circle_outline
          </span>
        ) : (
          <span
            className="material-icons button"
            onClick={() => dispatch(stopTracker(id))}
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
