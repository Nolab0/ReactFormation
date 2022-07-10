import PropTypes from "prop-types"
import { useState } from "react"
import moment from "moment"
import style from "../styles/Post.module.css"

function Post({ postData, deletePost }) {

    const [nbLikes, setNbLikes] = useState(postData.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const likePost = () => {
        if (isLiked) {
            setNbLikes(nbLikes - 1);
            setIsLiked(false);
        }
        else {
            setNbLikes(nbLikes + 1);
            setIsLiked(true);
        }
    }

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <div className={style.post}>
            <div className={style.post_header}>
                <div className={style.post_header_left}>
                    <img className={style.post_profilepic} src={postData.authorPicture} />
                    <div>
                        <div className={style.post_auhtor}>{postData.author}</div>
                        <div className={style.post_time}>{moment(postData.date).format("HH:mm")}</div>
                    </div>
                </div>
                <div className={style.post_menu} onClick={toggleMenu}>
                    ...
                    <div className={showMenu ? style.post_popup : style.post_popup_hidden} onClick={() => deletePost(postData.id)}>Delete</div>
                    {/*<button onClick={() => deletePost(postData.id)}>Delete post</button>*/}
                </div>
            </div>

            <div className={style.post_text}>
                {postData.text}
            </div>
            8b4beb
            <div className={style.post_picture}>
                <img src={postData.postPicture} />
            </div>

            <div className={style.post_footer}>
                <span className={isLiked ? style.post_liked : style.post_likes} onClick={likePost}>
                    <span className={style.post_thumb}>👍</span>
                    <span>{nbLikes} Likes </span>
                </span>
            </div>

        </div>
    )
}

Post.prototypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Post;