import React from "react";
import "./Tracker.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteTracker } from "../../redux/action/action";

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

  const icon = (
    <span className="material-icons">
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
      {format(new Date(tick - tracker.timeStart))}
      {icon}
      {del}
    </div>
  );
};

export default Tracker;
