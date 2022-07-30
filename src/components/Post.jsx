import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR/'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Post muito Bacana'])
 
  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  const isNewCommentEmpty = newCommentText.length === 0; 

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }
  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }
  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é Obrigatorio gente boa');
  }
  function deleteComment(commentToDelete){
    /* Imutabilidade --> as variaveis não sofrem mutação, 
    nós crimaos um novo valor (um novo espaço na memoria) */
    const commentsWithoutDeleteOne = comments.filter(comment => {
       return comment !== commentToDelete;
    })
    
    setComments(commentsWithoutDeleteOne);
  }

 

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar hasborder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.comment}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.comment}> <a href="">{line.content}</a>
              </p>
            )
          }
        })}
      </div>
      

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
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
