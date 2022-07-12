import React from 'react'
import boxStyle from "../styles/Post.module.css"
import style from "../styles/CreatePost.module.css"

class CreatePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postText: "",
            postPicture: ""
        };
    }

    onPostTextChangeHandler = (event) => {
        this.setState({ postText: event.target.value });
    };

    onPostPictureChangeHandler = (event) => {
        this.setPostText({ postPicture: event.target.value })
    };

    createPostHandler = (event) => {
        if (this.state.postText.length > 0)
            this.props.addPost(this.state.postText, this.state.postPicture);
        this.setState({ postText: "", postPicture: "" });
    }

    render() {
        const postHasText = this.state.postText.trim().length;
        return (
            <div className={boxStyle.post}>
                <div className={style.create_post_row}>
                    <div>Content: </div>
                    <input onChange={this.onPostTextChangeHandler} type="text" value={this.state.postText} placeholder="What's new ?" />
                </div>
                <div className={style.create_post_row}>
                    <div>Picture: </div>
                    <input onChange={this.onPostPictureChangeHandler} type="text" value={this.state.postPicture} placeholder="Picture URL" />
                </div>
                {postHasText > 0 &&
                    <div className={style.create_post_row_last}>
                        <button className={style.btn} onClick={this.createPostHandler}>Post</button>
                    </div>}
            </div>
        );
    }
}

export default CreatePost;