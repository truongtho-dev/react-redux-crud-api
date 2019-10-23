import React from "react";
import { connect } from "react-redux";
class AuthorName extends React.Component {
  render() {
    const { authors, postsOfAuthor } = this.props;
    return (
      <span>
        {authors
          .filter(i => postsOfAuthor.find(j => j.userId === i.id))
          .map(el => {
            return <span key={el.id}>{el.username}</span>;
          })}
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors,
    postsOfAuthor: state.postsOfAuthor.posts
  };
};

export default connect(
  mapStateToProps,
  null
)(AuthorName);
