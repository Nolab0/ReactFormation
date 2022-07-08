import PropTypes from "prop-types"
import { useState } from "react"

function Post(props) {

    const [nbLikes, setNbLikes] = useState(props.postData.likes);
    const [isLiked, setIsLiked] = useState(false);
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

    return <p>{props.postData.text} <br />
        Written by: {props.postData.author} <br />
        {nbLikes} Likes <br />
        <button onClick={likePost}>{isLiked ? "Unlike" : "Like"}</button>
    </p>
}

Post.prototypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Post;