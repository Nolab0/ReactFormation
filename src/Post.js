import PropTypes from "prop-types"

function Post({ author, text }) {
    return <p>{text} <br /> Written by: {author} </p>
}

Post.prototypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Post;