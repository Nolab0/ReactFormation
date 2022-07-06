import PropTypes from "prop-types"

function Post(props) {
    return <p>{props.postData.text} <br /> Written by: {props.postData.author} </p>
}

Post.prototypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Post;