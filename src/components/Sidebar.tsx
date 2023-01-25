import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    
    return (

     <aside className={styles.sidebar}>
        
        <img 
            className={styles.cover} 
            src='https://images.unsplash.com/photo-1613408181923-f058a1b0e00c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50'
        />

            <div className={styles.profile}>
                
                <Avatar src='http://github.com/amanditaray.png'/>

                <strong>Amandita Ray</strong>
                <span>Bookworm since 1999</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine />

                    Editar seu perfil
                </a>
            </footer>

    </aside>


    ) 

}