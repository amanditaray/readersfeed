import { Header } from './components/Header.js'
import { Post } from './components/Post.js'
import { Sidebar } from './components/Sidebar.js'

import styles from './App.module.css'
import './global.css'


const posts = [

  {

      id: 1, 
      author: {
      avatarUrl: 'https://github.com/amanditaray.png',
      name: 'Amandita França', 
      readerStart: 'Bookworm since 1999', 
    },

    content: [

      { type: 'paragraph', content: 'Fala galera! 👋',},          
      { type: 'paragraph', content: 'Acabei de terminar o 2o livro da série Wayward Pines!'},
      { type: 'paragraph', content:  'Incrível é pouco para descrever essa história!'}, 
      { type: 'link', content: 'goodreads.amanditaray' } , 
    
    ],

    publishedAt: new Date('2022-12-26 08:14:00'),

  }, 

  {
      id: 2, 
      author: {
      avatarUrl: 'http://github.com/renanfranca93.png',
      name: 'Renan França', 
      readerStart: 'Bookworm since 1997', 
    },

    content: [

      { type: 'paragraph', content: 'E aí pessoal! 👋'},          
      { type: 'paragraph', content: 'Estou lendo Dungeon Crawler Carl.' },
      {type: 'paragraph', content: ' É meu primeiro livro em inglês e tem RPG de sobra!'}, 
      { type: 'link', content: 'goodreads.renanfranca93' } , 
    
    ],

    publishedAt: new Date('2022-12-25 08:14:00'),

  }, 

  {
    id: 3, 
    author: {
    avatarUrl: 'http://github.com/tierryray.png',
    name: 'Tierry Ray', 
    readerStart: 'Bookworm since 2004', 
  },

  content: [

    { type: 'paragraph', content: 'Olá pessoas! 👋'},          
    { type: 'paragraph', content: 'Estou lendo Devoradores de Estrelas, indicação da minha maninha!' },
    { type: 'link', content: 'goodreads.tierryray' } , 
  
  ],

  publishedAt: new Date('2022-12-24 13:25:00'),

}, 
]; 


export function App() {

  return (
    <div>

        <Header />

        <div className={styles.wrapper}>
          
          <Sidebar />

          <main>

            {posts.map(post => {

            return(

              <Post 

              key={post.id}
              author={post.author}
              //@ts-ignore
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


