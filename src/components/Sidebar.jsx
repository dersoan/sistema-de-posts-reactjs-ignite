import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://s2.glbimg.com/yxg1X7w-KHANGNcCnYK4MqtNoUE=/0x0:512x300/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/E/Q/kjcNs4Tzqqel0cYsLoyQ/free-fire.jpg" />
    <div className={styles.profile}>
      <Avatar src="https://i.pinimg.com/originals/04/c7/09/04c709eec852f4b2204284037c4ab452.jpg" />
      <strong>Anderson Vieira</strong>
      <span> Web Developer</span>
    </div>
    <footer>
    
      <a href="#"> 
      <PencilLine size={20 }/> 
       Editar seu perfil </a>
    </footer>
    </aside>
  );
}