import React from "react";

export default function CommentList({ allcomments }) {
  if (allcomments.length == 0) {
    return <h6>no comments </h6>;
  }
  return (
    <>
      <div>
        <ul>
          {allcomments.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
