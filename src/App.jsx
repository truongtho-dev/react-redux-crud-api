import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./view/Header";
import ListAuthors from "./containers/ListAuthors";
import ListPosts from "./view/ListPosts";
import PostDetail from "./containers/PostDetail";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/authors" component={ListAuthors} />
        <Route path="/posts" component={ListPosts} />
        <Route exact path="/editpost/:postId" component={PostDetail} />
      </Switch>
    </Router>
  );
};

export default App;
