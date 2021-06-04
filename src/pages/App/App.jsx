import { Component } from 'react';
import Form from '../../components/Form/Form';
import Post from '../../components/Post/Post';
import './App.css';


export default class App extends Component {

  state = {
    posts:[]
  }

  getPosts = async ()=>{
    let res = await fetch('/api')
    let data = await res.json()
    this.setState({posts:data})

  }


  componentDidMount() {
    this.getPosts()
  }

  render() {
    return (
      <main className="App">
        <h1>Posts</h1>
        {this.state.posts.length ? 
          this.state.posts.map(p => (
            <Post 
              post={p}
              getPosts={this.getPosts}
            />
          ))
            :
          <h3>No Posts</h3>
        }

        <Form getPosts={this.getPosts}/>
      </main>
    )
  }
}