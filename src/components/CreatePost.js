import { useState } from "react"

function CreatePost({ addPost }) {

    const [postText, setPostText] = useState("");
    const [postPicture, setPostPicture] = useState("");

    const onPostTextChangeHandler = (event) => {
        setPostText(event.target.value);
    };

    const onPostPictureChangeHandler = (event) => {
        setPostPicture(event.target.value);
    };

    const createPostHandler = (event) => {
        if (postText.length > 0)
            addPost(postText, postPicture);
        setPostText("");
        setPostPicture("");
    }

    return (
        <>
            <div>CreatePost</div>
            Content: <input onChange={onPostTextChangeHandler} type="text" value={postText} />
            <br />
            Image: <input onChange={onPostPictureChangeHandler} type="text" value={postPicture} />
            {postText.trim().length > 0 && <button onClick={createPostHandler}>Post</button>}
        </>
    );
}

export default CreatePost;