import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'; 

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void ;

}

export function Comment({ content, onDeleteComment } : CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {

        onDeleteComment(content);

    }

    function handleLikeComment() {

        setLikeCount((state) => {
            return state + 1
        }); 
    }

    return (

    <div className={styles.comment}>
        
        < Avatar 

        hasBorder={false} 
        src='http://github.com/renanfranca93.png' 
        alt='' />

        <div className= {styles.commentBox}>


            <div className={styles.commentContent}>

                <header> 
                    
                    <div className={styles.authorAndTime}>
                        <strong>Renan França</strong>
                        <time title='13/12 às 13:50' dateTime='2022-13-12'> Há cerca de 1 hora</time>
                    </div>

                    <button onClick={handleDeleteComment} title='Deletar comentário'>

                    <Trash size={20}/>

                    </button>
                    
                    </header>

                <p>{content}</p>

            </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>

        </div>

    </div>
    )
}