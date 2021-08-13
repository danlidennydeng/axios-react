import React from 'react';
import axios from 'axios';

class CommentList extends React.Component {
  state = {
    comments: []
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => {
      const comments = res.data;
      this.setState({ comments });
    })
  }

  render() {
    return (
      <ul id='b'>
        { this.state.comments.map(comment => <li>{comment.name}</li>)}
      </ul>
    )
  }
  
}


export default CommentList;