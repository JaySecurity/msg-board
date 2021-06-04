import { Component } from 'react';

export default class Form extends Component {
  state = {
    content: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async ()=>{
    let body = {content: this.state.content}
    const options = {
      method:"POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(body)
    }

    const res = await fetch('/api', options)
    const data = await res.json()
    this.props.getPosts();
    this.setState({content: ''})
  }

  render() {
    return(
      <div>
        <textarea 
          name="content"
          onChange={this.handleChange}
          value={this.state.content}></textarea>
        <br/>
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    )
  }
}