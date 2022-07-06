import Post from "./Post"

function App() {
  const post1 = {
    author: "Mark Zuckerberg",
    text: "I'm CEO bitch"
  };

  return (
    <>
      <h1>News feed:</h1>
      <Post {...post1} />
      <Post author="Eduardo Saverin" text="I'm coming for everything" />
      <Post author="Sean Parker" text="Drop the 'the', just Facebook" />
    </>
  )
}

export default App;