import React from "react";
import { appState } from "./AppState";

import { observer } from "mobx-react-lite";

const ShowComment = observer((props) => {
  const { post } = props;
  return (
      <center>
    <div>
      <div>
        {post.comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.auther}</p>
              <p>{comment.post}</p>
          
              <button className="btn-edite" onClick={()=>{appState.deleteComment(comment.id,post.id)}}>Delete</button>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
    </center>
  );
});

export default ShowComment;
