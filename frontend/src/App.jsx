function App(){
  // fake posts for demonstration
  const posts = [
    { id: 1, title: "Looking for violinist", author: "Anna" },
    { id: 2, title: "Film project needs editor", author: "Mike" }
  ];
  return (
    <div>
      <h1>Arts Forum</h1>
      <h2>Requests</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>By {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default App;