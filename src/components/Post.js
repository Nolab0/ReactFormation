import PropTypes from "prop-types"
import { useState } from "react"
import moment from "moment"

function Post({ postData, deletePost }) {

    const [nbLikes, setNbLikes] = useState(postData.likes);
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

    return <p>
        {postData.text} <br />
        <img src={postData.postPicture} /> <br />
        Written by: {postData.author} at {moment(postData.date).format("HH:mm")} <img src={postData.authorPicture} /><br />
        {nbLikes} Likes <br />
        <button onClick={likePost}>{isLiked ? "Unlike" : "Like"}</button>
        <button onClick={() => deletePost(postData.id)}>Delete post</button>
    </p>
}

Post.prototypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Post;