import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
   onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://i.pinimg.com/originals/04/c7/09/04c709eec852f4b2204284037c4ab452.jpg"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anderson Vieira</strong>
              <time title="11 de Maio às 08:13"> Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>{" "}
          </button>
        </footer>
      </div>
    </div>
  );
}
