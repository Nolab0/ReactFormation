import { useState } from "react"
import CreatePost from "./CreatePost";
import Feed from "./Feed"
import Header from "./Header"


function App() {
  const initialPost = [
    {
      id: 1,
      author: "Mark Zuckerberg",
      authorPicture: 'https://picsum.photos/seed/profile11/50/50',
      text: "I'm CEO bitch",
      postPicture: "https://picsum.photos/seed/picsum/500/300",
      likes: 6,
      date: new Date(Date.now())
    },
    {
      id: 2,
      author: "Eduardo Saverin",
      authorPicture: "https://picsum.photos/seed/profile16/50/50",
      text: "I'm coming for everything",
      postPicture: "https://picsum.photos/seed/picsum/500/300",
      likes: 3,
      date: new Date(Date.now() - 3600 * 1000)
    },
    {
      id: 3,
      author: "Sean Parker",
      authorPicture: "https://picsum.photos/seed/profile0/50/50",
      text: "Drop the 'the', just Facebook",
      postPicture: "https://picsum.photos/seed/picsum/500/300",
      likes: 0,
      date: new Date(Date.now() - 3600 * 2000)
    }
  ]

  const [posts, setPosts] = useState(initialPost);

  const currrentUser = {
    author: "User",
    authorPicture: "https://picsum.photos/seed/profile42/50/50"
  };

  const addPost = (postText, postPicture) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      author: currrentUser.author,
      authorPicture: currrentUser.authorPicture,
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

  return (
    <>
      <Header />
      <CreatePost addPost={addPost} />
      <Feed posts={posts} deletePost={deletePost} />
    </>
  )
}

export default App;