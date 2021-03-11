import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTracker } from "../../redux/action/action";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      name: value || "name",
      currentTrackValue: 0,
      timeStart: Date.now(),
      isStarted: true,
    };
    dispatch(addTracker(data));
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
    </div>
  );
};

export default Input;
