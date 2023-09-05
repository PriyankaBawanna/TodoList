import { useState } from "react";
import "./App.css";
import Comment from "./Comment/Comment";
import CommentList from "./Comment/CommentList";

function App() {
  const [comments, setComments] = useState([]);
  // const comments = [
  //   // { id: 1, text: "Comment 1" },
  //   // { id: 2, text: "Comment 2" },
  // ];
  return (
    <>
      <p>Hello User </p>
      <div>are you ready</div>
      <Comment setComments={setComments} />
      <CommentList allcomments={comments} />
    </>
  );
}

export default App;
