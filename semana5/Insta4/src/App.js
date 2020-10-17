import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    arrayPosts: [ 
      {
        nomeUsuario: 'paulinha',
        fotoUsuario:'https://picsum.photos/50/50/?a=1',
        fotoPost:'https://picsum.photos/200/150/?a=1'
      },
      {
        nomeUsuario: 'bya',
        fotoUsuario: 'https://picsum.photos/50/50/?a=2',
        fotoPost: 'https://picsum.photos/200/150/?a=4'
      },
      {
        nomeUsuario: 'nana',
        fotoUsuario: 'https://picsum.photos/50/50/?a=3',
        fotoPost: 'https://picsum.photos/200/150/?a=5'
      }
    ]
  }

  render() {
    const listaDePosts = this.state.arrayPosts.map((post, index, posts) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
      
      return (
        <div className={'app-container'}>
          {listaDePosts}
        </div>
      );
  }
}

export default App;