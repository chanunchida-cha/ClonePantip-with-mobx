import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { appState } from "./AppState";
let genID = 0;

const FormComment = observer((props) => {
  const [auther, setAuther] = useState("");
  const [post, setPost] = useState("");

  const inputAuther = (event) => {
    setAuther(event.target.value);
  };

  const inputPost = (event) => {
    setPost(event.target.value);
  };

  const saveItem = (event) => {
    event.preventDefault();
    const comment = {
      id: genID++,
      threadId: props.post.id,
      auther: auther,
      post: post,
    };
    const threadId = props.post.id
    console.log("comment", comment);
    console.log("postIdformcomment",threadId );
    appState.addNewComment(threadId,comment);
    setAuther("");

    setPost("");
  };

  return (
    <div>
      <center>
        <h1>Comment</h1>
        <div className="container">
          <div className="bgg">
            <form onSubmit={saveItem}>
              <div>
                <label className="text">Username</label>
                <p></p>
                <input
                  type="text"
                  placeholder="username"
                  className="username"
                  onChange={inputAuther}
                  value={auther}
                />
              </div>
              <div>
                <label className="text">Comment</label>
                <p></p>
                <textarea
                  rows="6"
                  type="text"
                  name="content"
                  placeholder="What's happen?"
                  className="content"
                  onChange={inputPost}
                  value={post}
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn-post">
                  comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
});
export default FormComment;
