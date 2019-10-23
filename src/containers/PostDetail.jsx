import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { editedPostOfAuthor } from "../actions";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      userId: "",
      title: "",
      content: ""
    };
  }
  handleOnchange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleClickSubmit = () => {
    editedPostOfAuthor(this.state.id, this.state.title, this.state.content);
  };
  UNSAFE_componentWillReceiveProps = nextProps => {
    if (this.props.post !== nextProps.post) {
      this.setState({
        id: nextProps.post.id,
        userId: nextProps.post.userId,
        title: nextProps.post.title,
        content: nextProps.post.body
      });
    }
  };
  render() {
    return (
      <Grid item xs={8}>
        <h3>Post Detail: </h3>
        <form onSubmit={this.handleSubmit}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell>Post Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={this.state.id}>
                <TableCell>{this.state.userId}</TableCell>
                <TableCell>{this.state.id}</TableCell>
                <TableCell>
                  <input
                    name="title"
                    type="text"
                    onChange={this.handleOnchange}
                    value={this.state.title}
                  />
                </TableCell>
                <TableCell>
                  <input
                    name="content"
                    type="text"
                    onChange={this.handleOnchange}
                    value={this.state.content}
                  />
                </TableCell>
                <TableCell>
                  <button onClick={this.handleClickSubmit}>Save</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return {
    post: state.editPostOfAuthor.post
  };
};
export default connect(mapStateToProps)(PostDetail);
