import { useState } from "react"
import Post from "./Post"
import Header from "./Header"

const initialPost = [
  { id: 1, author: "Mark Zuckerberg", text: "I'm CEO bitch", likes: 6 },
  { id: 2, author: "Eduardo Saverin", text: "I'm coming for everything", likes: 3 },
  { id: 3, author: "Sean Parker", text: "Drop the 'the', just Facebook", likes: 0 }
]

function App() {
  const [posts, setPosts] = useState(initialPost);
  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== 3));
  }


  return (
    <>
      <Header />
      <h3>News feed:</h3>
      <button onClick={deletePost}>Delete 3rd post</button>
      {posts.map(p => <Post key={p.id} postData={p} />)}
    </>
  )
}

export default App;