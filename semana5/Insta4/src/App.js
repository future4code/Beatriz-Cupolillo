import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50/?a=1'}
          fotoPost={'https://picsum.photos/200/150/?a=1'}
        />
        <Post
          nomeUsuario={'bya'}
          fotoUsuario={'https://picsum.photos/50/50/?a=2'}
          fotoPost={'https://picsum.photos/200/150/?a=4'}
        />
        <Post
          nomeUsuario={'nana'}
          fotoUsuario={'https://picsum.photos/50/50/?a=3'}
          fotoPost={'https://picsum.photos/200/150/?a=5'}
        />
        
      </div>
      
    );
  }
}

export default App;
