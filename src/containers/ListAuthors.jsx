import React from "react";
import { connect } from "react-redux";
import { getAuthors } from "../actions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class ListAuthors extends React.Component {
  componentDidMount() {
    this.props.getAuthors();
  }
  render() {
    const { authors } = this.props;
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map(i => (
              <TableRow key={i.id}>
                <TableCell>{i.id}</TableCell>
                <TableCell>{i.name}</TableCell>
                <TableCell>{i.username}</TableCell>
                <TableCell>{i.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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
  { getAuthors }
)(ListAuthors);
