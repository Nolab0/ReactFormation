import Post from './Post'
import { ReactComponent as EmptyImageSvg } from "../images/undraw_no_data_re_kwbl.svg"
import style from "../styles/Feed.module.css"

function Feed({ posts, deletePost }) {

    posts.sort((post1, post2) => post2.date.getTime() - post1.date.getTime())

    return posts.length > 0 ?
        (
            <div className={style.feed}>
                <h3>News feed:</h3>
                {posts.map(p => <Post key={p.id} postData={p} deletePost={deletePost} />)}
            </div>
        ) : (
            <div className={style.feed}>
                <h3 align="center">
                    <EmptyImageSvg width="200" />
                    <div>There are no posts for the moment</div>
                </h3>
            </div>
        )
}

export default Feed;