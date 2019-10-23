import React from "react";
import Grid from "@material-ui/core/Grid";
import Posts from "../containers/Posts";
import ListAuthorName from "../containers/ListAuthorName";
class ListPosts extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        <ListAuthorName />
        <Posts />
      </Grid>
    );
  }
}

export default ListPosts;
