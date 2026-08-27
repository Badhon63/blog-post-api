const express = require("express");
const app = express();

app.use(express.json());

let posts = [];
let nextId = 1;

// POST /posts - Create a new blog post
app.post("/posts", (req, res) => {
  const { title, content, author } = req.body;

  if (!title || title.length < 3) {
    return res
      .status(400)
      .json({ error: "Title is required and must be at least 3 characters" });
  }

  if (!content || content.length < 10) {
    return res
      .status(400)
      .json({
        error: "Content is required and must be at least 10 characters",
      });
  }

  if (!author) {
    return res.status(400).json({ error: "Author is required" });
  }

  const newPost = {
    id: nextId++,
    title,
    content,
    author,
    createdAt: new Date().toISOString(),
  };

  posts.push(newPost);

  res.status(201).json({
    message: "Blog post created successfully",
    post: newPost,
  });
});

// GET /posts/:id - Retrieve a blog post by ID
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: `Blog post with ID ${id} not found` });
  }

  res.status(200).json(post);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
