import * as courseActions from "../../../redux/actions/postsActions";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CoursesPage extends React.Component {
    
  componentDidMount() {
    const { posts, actions } = this.props;

    debugger;
    if (posts.length === 0) {
      actions.loadPosts().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

  }


  handleAdd = async () => {
    const { posts, actions } = this.props;
    debugger;
    console.log('handleAdd in course Page ');
    const newPost = {
        title: "new Title ...",
        body: "new Body  ...",
        userId: 1
      };
    actions.SavePost(newPost).catch(error => {
        alert("Saving post failed" + error);
      });
  };

  handleDelete = async id => {
    const { posts, actions } = this.props;
    try {
        actions.DeletePost(id).catch(error => {
          alert("Saving post failed" + error);
        });
        
    } catch (ex) {
        //toast.error("An error occurred when deleting a post!");
    }
  };

  

  render() {
    return (
      <>
        <h5>Posts using redux</h5>

        <div>
        <button title="Add new" style={{float: 'left'}} className="k-button k-primary" onClick={this.handleAdd} >
            Add new
        </button>
    </div>
        <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {this.props.posts.map(post => {
        return (
          <tr key={post.id}>
            <td>
              <button className="btn btn-light" onClick={() => {this.handleDelete(post.id) }}>
                Delete
              </button>
            </td>
            <td>
              <Link to={"/course/" + post.id}>{post.title}</Link>
            </td>
            <td>{post.body}</td>
            <td>{post.userId}</td>
          </tr>
        );
      })}
    </tbody>
  </table>

  
      </>
    );
  }
}


CoursesPage.propTypes = {
    posts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };
  
  function mapStateToProps(state) {
      debugger;
    return {
        posts:
        state.posts.posts
          ? state.posts.posts
          : []
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadPosts: bindActionCreators(courseActions.loadPosts, dispatch),
        SavePost: bindActionCreators(courseActions.SavePost, dispatch),
        DeletePost: bindActionCreators(courseActions.DeletePost, dispatch),
      }
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CoursesPage);