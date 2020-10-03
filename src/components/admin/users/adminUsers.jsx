import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import React, { Component } from "react";
import { deletePost, getPosts, savePost, updatePost } from "../../../services/userService";

import axios from "axios";
import cellWithEditing from '../../common/cellWithEditing';
import { toast } from "react-toastify";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";


class AdminUsers extends Component {
  state = { skip: 0, take: 10 , posts: [] }

    pageChange = (event) => {
        this.setState({
            skip: event.page.skip,
            take: event.page.take
        });
    }
 


   handleAdd = async () => {
    console.log('post');
    const newPost = {
        title: "new Title ...",
        body: "new Body  ...",
        userId: 1
      };
      const { data: post } = await savePost(newPost);
      console.log(post);
      //toast.success("handleAdd");
      const posts = [post, ...this.state.posts];
      this.setState({ posts });
  };

  handleUpdate = async post => {
    console.log(post);
    post.title = "Updated";
    const { data: updatedPost } = await updatePost(post)
    console.log(updatedPost);
    toast.success("handleUpdate");
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    console.log(post);
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(item => item.id !== post.id);
    this.setState({ posts }); // Optimistic Update

    try {
        await deletePost(post.id);
    } catch (ex) {
        toast.error("An error occurred when deleting a post!");
      this.setState({ posts: originalPosts }); // Undo changes
    }
  };

  async componentDidMount() {
   
    const { data: posts } = await getPosts();
    this.setState({ posts }); // = { posts: posts }
}

  render() {
    return (
      <React.Fragment>

                <Grid
                    style={{ height: '400px' }}
                    data={this.state.posts.slice(this.state.skip, this.state.take + this.state.skip)}
                    skip={this.state.skip}
                    take={this.state.take}
                    total={this.state.posts.length}
                    pageable={true}
                    onPageChange={this.pageChange}
                >
                    <GridToolbar>
                        <div onClick={this.closeEdit}>
                            <button title="Add new" style={{float: 'left'}} className="k-button k-primary" onClick={this.handleAdd} >
                                Add new
                            </button>
                        </div>
                    </GridToolbar>

                    <GridColumn field="userId" width="150px"/>
                    <GridColumn field="title" title="title" />
                    <GridColumn field="body" title="body" />
                    <GridColumn width="200px" cell={cellWithEditing(this.handleUpdate, this.handleDelete)}/>
                </Grid>
        
        
      </React.Fragment>
    );
  }
}

export default AdminUsers;