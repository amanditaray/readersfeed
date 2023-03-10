import { format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {

    name: string;
    readerStart: string;
    avatarUrl: string; 
}

interface Content {

    type: 'paragraph' | 'link';
    content: string; 
}

interface PostProps {

    author: Author;
    publishedAt: Date;
    content: Content[]; 
   

}


export function Post({author, publishedAt, content} : PostProps) {

    const [comments, setComments] = useState([

        'O primeiro é bom também?',
    ])


    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt,"d 'de' LLL 'às' HH:mm'h'", { 

        locale: ptBr 
    })

    const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {

        locale: ptBr,
        addSuffix: true, 

    })


    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){

        event.target.setCustomValidity('');

        setNewCommentText(event.target.value); 
    }


    function handleCreateNewComment(event: FormEvent){

        event.preventDefault()

        // const newCommentText = event.target.comment.value 

        setComments([...comments, newCommentText]);
        setNewCommentText(''); 
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){

        event.target.setCustomValidity('Esse campo é obrigatório!'); 
    }

    function deleteComment(commentToDelete: String) {

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete; 
        })

        setComments(commentsWithoutDeletedOne); 

    }

    const newCommentEmpty = newCommentText.length === 0; 

    return (

        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    
                    <Avatar src={author.avatarUrl}/>

                    <div className={styles.authorInfo}> 
                        <strong>{author.name}</strong>
                        <span>{author.readerStart}</span>
                    </div>
                </div>


                <time title=
                {publishedDateFormatted} 

                dateTime={publishedAt.toISOString()}>

                    {publisheDateRelativeToNow}


                </time>
            </header>

            <div className={styles.content}>

                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href=''>{line.content}</a></p>
                    }
                })}
                   
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>


                <textarea 

                name='comment'

                value={newCommentText}
                
                placeholder='Digite um comentário...'

                onChange={handleNewCommentChange}

                onInvalid={handleNewCommentInvalid}

                required
                
                />

            <footer>
                <button type='submit' disabled={newCommentEmpty}>Publicar</button>
            </footer>
                

            </form>

            <div className={styles.commentList}>

                {comments.map(comment =>{

                    return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                    )
                })}

            </div>

        </article>
    )
  

    }