import Post from "./Post"
import Header from "./Header"

const posts = [
  { id: 1, author: "Mark Zuckerberg", text: "I'm CEO bitch" },
  { id: 2, author: "Eduardo Saverin", text: "I'm coming for everything" },
  { id: 3, author: "Sean Parker", text: "Drop the 'the', just Facebook" }
]

function App() {
  return (
    <>
      <Header />
      <h3>News feed:</h3>
      {posts.map(p => <Post key={p.id} postData={p} />)}
    </>
  )
}

export default App;