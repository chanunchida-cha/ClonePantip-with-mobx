import React from "react";
import { appState } from "./AppState";
//import ItemPost from "./ItemPost";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const ShowPost =observer( ()=> {
  return (
    <center>
    <div className="container-post" >
        {appState.threads.map((thread) => {
          console.log(thread);
          console.log("idShowpost",thread.id);
          return(
            <div  key={thread.id}>
           
               
                <div>
                  
                {thread.auther}
                
                <p>
                <Link to={`/post/${thread.id} `}>
                    {thread.topic}
                    </Link>
                </p>
                
                <p>
                    {thread.post}
                </p>
              
                </div>


             <button className="btn-edite" onClick={()=>{appState.deleteThread(thread.id)}}>Delete</button>
         
            </div>
          )

        })}
        
    </div>
    </center>
  );
}
)
export default ShowPost