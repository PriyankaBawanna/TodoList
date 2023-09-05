import { useState } from "react";
import "./App.css";
import Comment from "./Comment/Comment";
import CommentList from "./Comment/CommentList";

function App() {
  const [comments, setComments] = useState([]);

  return (
    <>
      <p>There i added new Line </p>
      <div> git Merge check Karna hai </div>
      <b>interview clear karna hai

      </b>
      <Comment setComments={setComments} />
      <CommentList allcomments={comments} />
    </>
  );
}

export default App;
