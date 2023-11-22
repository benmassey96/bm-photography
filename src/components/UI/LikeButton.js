import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import styles from './LikeButton.module.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const onLikeHandler = event => {
    setLiked(true)
    event.target.classList.add("fa-bounce")
  };

  return (
    <FontAwesomeIcon 
      icon={liked ? heartSolid : heartOutline}
      size="sm"
      style={liked ? {color: "#A80000",} : {color: "#000000"}}
      className={styles.likeButton}
      onClick={onLikeHandler}
    />
  )
}

export default LikeButton;