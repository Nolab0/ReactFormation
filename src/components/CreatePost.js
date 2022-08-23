import { useState, useContext } from "react"
import boxStyle from "../styles/Post.module.css"
import style from "../styles/CreatePost.module.css"
import useLogVar from "../hooks/useLogVar";
import useLocalStorage from "../hooks/useLocalStorage";
import UserContext from '../contexts/UserContext'

function CreatePost({ addPost }) {

    const [postText, setPostText] = useLocalStorage("", "postText");
    const [postPicture, setPostPicture] = useState("");

    const { user } = useContext(UserContext);


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

    useLogVar(postText, "postText");

    return (
        <div className={boxStyle.post}>
            <div className={style.create_post_row}>
                <img src={user.authorPicture} style={{ borderRadius: '50%', width: 35 }} alt="" />
                <input onChange={onPostTextChangeHandler} type="text" value={postText} placeholder="What's new ?" />
            </div>
            <div className={style.create_post_row}>
                <div>Picture: </div>
                <input onChange={onPostPictureChangeHandler} type="text" value={postPicture} placeholder="Picture URL" />
            </div>
            {postText.trim().length > 0 &&
                <div className={style.create_post_row_last}>
                    <button className={style.btn} onClick={createPostHandler}>Post</button>
                </div>}
        </div>
    );
}

export default CreatePost;