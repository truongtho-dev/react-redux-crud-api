import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthors, getPostsOfAuthor } from "../actions";

class ListPosts extends React.Component {
  componentDidMount() {
    this.props.getAuthors();
  }

  handleClickAuthorId = e => {
    this.props.getPostsOfAuthor(e.target.id);
  };

  render() {
    const { authors } = this.props;
    return (
      <Grid item xs={2}>
        <h3>List Authorname</h3>
        <List>
          {authors.map(i => (
            <ListItem key={i.id}>
              <Link
                to={`/posts/${i.username}`}
                id={i.id}
                onClick={this.handleClickAuthorId}
              >
                {i.username}
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

export default connect(
  mapStateToProps,
  { getAuthors, getPostsOfAuthor }
)(ListPosts);
