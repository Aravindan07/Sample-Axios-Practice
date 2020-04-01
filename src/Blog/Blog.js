import React from "react";
import axios from "../axios";
import "./Blog.css";
import Post from "../Post/Post";
import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";

class Blog extends React.Component {
  state = {
    posts: [],
    showPostId: null
  };

  componentDidMount() {
    axios.get("/posts").then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Aravind"
        };
      });
      this.setState({ posts: updatedPosts });
      //console.log(response);
    });
  }

  postSelectedHandler = id => {
    this.setState({ showPostId: id });
  };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.showPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
