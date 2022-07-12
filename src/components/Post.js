import PropTypes from "prop-types"
import { useState } from "react"
import moment from "moment"
import style from "../styles/Post.module.css"


function Post({ postData, deletePost, likePost }) {

    const [showMenu, setShowMenu] = useState(false);

    const onLikePost = () => {
        if (postData.isLiked)
            likePost(postData.id, -1);
        else
            likePost(postData.id, 1);
    }

    const toggleMenu = () => setShowMenu(!showMenu);

    return (
        <div className={style.post}>
            <div className={style.post_header}>
                <div className={style.post_header_left}>
                    <img className={style.post_profilepic} src={postData.authorPicture} alt="Profile" />
                    <div>
                        <div className={style.post_auhtor}>{postData.author}</div>
                        <div className={style.post_time}>{moment(postData.date).format("HH:mm")}</div>
                    </div>
                </div>
                <div className={style.post_menu} onClick={toggleMenu}>
                    ...
                    <div className={showMenu ? style.post_popup : style.post_popup_hidden} onClick={() => deletePost(postData.id)}>Delete</div>
                </div>
            </div>

            <div className={style.post_text}>
                {postData.text}
            </div>
            <div className={style.post_picture}>
                <img src={postData.postPicture} alt="Post" />
            </div>

            <div className={style.post_footer}>
                <span className={postData.isLiked ? style.post_liked : style.post_likes} onClick={onLikePost}>
                    <span className={style.post_thumb}>👍</span>
                    <span>{postData.likes} Likes </span>
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