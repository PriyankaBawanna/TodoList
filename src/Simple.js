import React from "react";
const Simple = () => {
  return (
    <div data-testid="myRootDiv">
      <h1>Testing Component</h1>
      <button>Test button</button>
      <input type="text" placeholder="texting input" />
      <ul>
        <li>item 1</li>
        <li>item 2 </li>
      </ul>
    </div>
  );
};
export default Simple;
