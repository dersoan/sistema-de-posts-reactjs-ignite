import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dersoan.png',
      name: 'Anderson Vieira',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galeraa 👋' },
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 👋' },
      {type: 'link', content: '✌️ Most commonly known as a ✌️' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.pinimg.com/originals/04/c7/09/04c709eec852f4b2204284037c4ab452.jpg',
      name: 'Anna Paula',
      role: 'Escritora'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galeraa 👋' },
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 👋' },
      {type: 'link', content: '✌️ Most commonly known as a ✌️' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return ( <Post
          key={post.id}
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
          />
          )
        })}
     
    
      </main>
      </div>
     
    
    </div>
  )
}
