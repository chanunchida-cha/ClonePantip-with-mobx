import React from "react";
import FormInput from "./component/FormInput";
import Header from "./component/Header";
import { Route, Switch } from "react-router";
import { observer } from "mobx-react-lite";
import ShowPost from "./component/ShowPost";
import SinglePost from "./component/SinglePost";
import { appState } from "./component/AppState";
import FormComment from "./component/FormComment";
import ShowComment from "./component/ShowComment";

const App = observer(() => {
  const comments = appState.threads.comments
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <ShowPost />
        </Route>
        <Route path="/post" exact>
          <FormInput />
          <ShowPost />
        </Route>
        <Route
          path="/post/:id"
          children={(props) => {
            console.log("props",props);
            const itemid = props.match.params.id;
            const post = appState.threads.find(
              (thread) => thread.id === Number(itemid)
            );

            console.log(post);
            console.log(itemid);
            if (!post) {
              return <div>404 Not Found</div>;
            }
            return (
              <div>
                <SinglePost post={post} />
                <FormComment post={post} />
                <ShowComment post={post} /> 
              </div>
            );
          }}
        ></Route>
      </Switch>
    </div>
  );
});
export default App;
