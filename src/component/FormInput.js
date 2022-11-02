import React, { useState } from "react";
import { appState } from "./AppState";
import {observer} from "mobx-react-lite"
import "../App.css"


let genID = 0;

const FormInput=observer (()=> {
  const [auther, setAuther] = useState("");
  const [topic, setTopic] = useState("");
  const [post, setPost] = useState("");

  const inputAuther = (event) => {
    setAuther(event.target.value);
  };
  const inputTopic = (event) => {
    setTopic(event.target.value);
  };
  const inputPost = (event) => {
    setPost(event.target.value);
  };

  const saveItem =(event)=> {
    event.preventDefault();
    const itemData = {
        id:genID ++,
        auther:auther,
        topic:topic,
        post:post,
        comments:[]
    }
    console.log("itemData",itemData);
    appState.addNewThread(itemData)
    setAuther("")
    setTopic("")
    setPost("")
    
}

  return (
    <center>
      <h1>New Post</h1>
    <div className="container">
      <div className="bgg">
      <form onSubmit={saveItem}>
        <div >
          <label className="text">Username</label>
          <p></p>
          <input type="text" placeholder="username" className="username" onChange={inputAuther} value={auther} />
        </div>
        <div >
          <label className="text">Topic</label>
          <p></p>
          <textarea
            rows="3"
            type="text"
            placeholder="Topic?"
            className="topic"
            onChange={inputTopic}
            value={topic}
          ></textarea>
        </div>
        <div >
          <label className="text">New Post</label>
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
          <button type="submit" className="btn-post" >
            Post
          </button>
        </div>
      </form>
      </div>
    </div>
    </center>
  );
}
)

export default FormInput