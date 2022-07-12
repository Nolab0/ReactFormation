import Post from './Post'
import { ReactComponent as EmptyImageSvg } from "../images/undraw_no_data_re_kwbl.svg"
import style from "../styles/Feed.module.css"

function Feed({ posts, deletePost, likePost, isLoading }) {

    posts.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime())

    return isLoading ?
        (
            <div>Loading...</div>
        ) :
        posts.length > 0 ?
            (
                <div className={style.feed}>
                    <h3>News feed:</h3>
                    {posts.map(p => <Post key={p.id} postData={p} deletePost={deletePost} likePost={likePost} />)}
                </div>
            ) : (
                <div className={style.feed}>
                    <h3 align="center">
                        <EmptyImageSvg width="200" height="300" />
                        <div>There are no posts for the moment</div>
                    </h3>
                </div>
            )
}

export default Feed;