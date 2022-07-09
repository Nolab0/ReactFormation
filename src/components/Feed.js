import Post from './Post'
import { ReactComponent as EmptyImageSvg } from "../images/undraw_no_data_re_kwbl.svg"

function Feed({ posts, deletePost }) {

    posts.sort((post1, post2) => post2.date.getTime() - post1.date.getTime())

    return posts.length > 0 ?
        (
            <>
                <h3>News feed:</h3>
                {posts.map(p => <Post key={p.id} postData={p} deletePost={deletePost} />)}
            </>
        ) : (
            <>
                <h3 align="center">
                    <EmptyImageSvg width="200" />
                    There are no posts for the moment
                </h3>
            </>
        )
}

export default Feed;