import { useState } from "react";
import "./App.css";
import Comment from "./Comment/Comment";
import CommentList from "./Comment/CommentList";

function App() {
  const [comments, setComments] = useState([]);
  const handleLogin = () => {
    console.log("I logged in here ")
  }
  return (
    <>
      <p>There i added new Line </p>
      <div> git Merge check Karna hai </div>
      <b>interview clear karna hai

      </b>
      <Comment setComments={setComments} />
      <CommentList allcomments={comments} />
      <button onClick={handleLogin}>Log Me</button>
    </>
  );
}

export default App;
