import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed"
import useLocalStorage from "../hooks/useLocalStorage";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

function HomePage() {

    const { user } = useContext(UserContext);

    const initialPost = [
        {
            id: 1,
            author: "Mark Zuckerberg",
            authorPicture: 'https://picsum.photos/seed/profile11/50/50',
            text: "I'm CEO bitch",
            postPicture: "https://picsum.photos/seed/picsum/500/300",
            likes: 6,
            isLiked: true,
            date: new Date(Date.now()),
        },
        {
            id: 2,
            author: "Eduardo Saverin",
            authorPicture: "https://picsum.photos/seed/profile16/50/50",
            text: "I'm coming for everything",
            postPicture: "https://picsum.photos/seed/picsum/500/300",
            likes: 3,
            isLiked: false,
            date: new Date(Date.now() - 3600 * 1000)
        },
        {
            id: 3,
            author: "Sean Parker",
            authorPicture: "https://picsum.photos/seed/profile0/50/50",
            text: "Drop the 'the', just Facebook",
            postPicture: "https://picsum.photos/seed/picsum/500/300",
            likes: 0,
            isLiked: false,
            date: new Date(Date.now() - 3600 * 2000)
        }
    ]

    // const [posts, setPosts] = useState(initialPost);

    const [posts, setPosts] = useLocalStorage(initialPost, "facebook_posts");

    //const [isLoading, setIsLoading] = useState(true);

    const isLoading = false;

    /*const bouchonBackend = () => {
      return new Promise((resolve, obect) => {
        setTimeout(() => resolve(initialPost), 1000);
      })
    }
  
  
    // At first loading of the component
    useEffect(() => {
      bouchonBackend().then(posts => {
        setPosts(posts)
        setIsLoading(false);
      });
    }, []);*/


    const addPost = (postText, postPicture) => {
        const newPost = {
            id: Math.floor(1000 * Math.random()),
            author: user.author,
            authorPicture: user.authorPicture,
            text: postText,
            postPicture: postPicture,
            likes: 0,
            date: new Date()
        };
        setPosts([...posts, newPost]);
    }

    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id));
    }

    const likePost = (id, incr) => {
        setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + incr, isLiked: !p.isLiked } : p));
    }

    return (
        <>
            <CreatePost addPost={addPost} />
            <Feed posts={posts} deletePost={deletePost} likePost={likePost} isLoading={isLoading} />
        </>
    )
}

export default HomePage