import React from "react";
import { observer } from "mobx-react-lite";


const SinglePost = observer((props) => {
  const { post } = props;
  return (
    <center>
      <div className="container-post">
        <div key={post.id}>
         
          <div>
            {post.auther}
            <p>{post.topic}</p>
            <p>{post.post}</p>
          </div>

          {/* <button className="btn-edite" onClick={()=>{editPost(element.id)}}>Edite</button>
            <button className="btn-delete" onClick={()=> handleDelete(element.id)}>Delete</button> */}
        </div>{" "}
      </div>
    </center>
  );
});
export default SinglePost;
