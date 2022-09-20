import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";

export default function Comment({ setComments }) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const addComments = () => {
    setComments((prev) => [...prev, { id: Date.now(), text: text }]);
    setText("");
  };
  return (
    <>
      <div className="commentForm">
        <h2>Comment Form </h2>
        <input
          type="text"
          placeholder="enter comments"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div>
          <input
            type="checkbox"
            value="selected "
            id="checkbox"
            defaultChecked={toBeChecked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <label htmlFor="checkbox">I agree with terms and Conditions</label>
        </div>
        <button disabled={!checked || !text} onClick={addComments}>
          Comment{" "}
        </button>
      </div>
    </>
  );
}
