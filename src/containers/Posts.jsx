import React from "react";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsOfAuthor, editPostOfAuthor, deletePost } from "../actions";
import AuthorName from "./AuthorName";

class Posts extends React.Component {
  componentDidMount() {
    this.props.getPostsOfAuthor();
  }
  handleClickPost = e => {
    this.props.editPostOfAuthor(e.target.id);
  };
  handleDeletePost = e => {
    deletePost(e.target.id);
  };
  render() {
    const { posts } = this.props;

    return (
      <Grid item xs={10}>
        <div>
          <h3>
            List Posts of : <AuthorName />
          </h3>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>UserId</TableCell>
              <TableCell>PostId</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map(i => (
              <TableRow key={i.id}>
                <TableCell>{i.userId}</TableCell>
                <TableCell>{i.id}</TableCell>
                <TableCell>{i.title}</TableCell>
                <TableCell>{i.body}</TableCell>
                <TableCell>
                  <Link
                    to={`/editpost/${i.id}`}
                    id={i.id}
                    onClick={this.handleClickPost}
                  >
                    Edit
                  </Link>
                </TableCell>
                <TableCell id={i.id} onClick={this.handleDeletePost}>
                  Delete
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsOfAuthor.posts
  };
};

export default connect(
  mapStateToProps,
  { getPostsOfAuthor, editPostOfAuthor }
)(Posts);
