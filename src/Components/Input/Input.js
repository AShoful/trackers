import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTracker } from "../../redux/action/action";
import "./Input.css";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const tick = useSelector((state) => state.tick) || Date.now();
  const defaultName = (date) => new Date(date).toLocaleString().split(", ")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      name: value || defaultName(Date.now()),
      currentTrackValue: 0,
      timeStart: tick,
      isStarted: true,
    };
    dispatch(addTracker(data));
    setValue("");
  };

  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter tracker's name"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <span onClick={handleSubmit} className="material-icons">
          play_circle_outline
        </span>
      </form>
    </div>
  );
};

export default Input;
