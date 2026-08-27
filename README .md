# 📝 Blog Post API

A simple RESTful Blog Post API built with **Node.js** and **Express.js**.

This project is a beginner-friendly backend assignment for learning how to build REST APIs, handle HTTP requests, validate data, and return proper JSON responses.

---

## 🚀 Features

- Create a new blog post
- Retrieve a blog post by ID
- Automatic ID generation
- Automatic creation timestamp
- JSON request body support
- Input validation for all required fields
- Proper HTTP status codes
- Simple in-memory data storage

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **JavaScript**
- **REST API**
- **JSON**

---

## 📂 Project Structure

blog-api/
│
├── node_modules/
├── server.js
├── package.json
├── package-lock.json
└── README.md


---

## ⚙️ Getting Started

### Prerequisites

Make sure **Node.js** and **npm** are installed.

node -v
npm -v


### Installation

**1. Clone the repository**

git clone https://github.com/Badhon63/blog-post-api.git


**2. Navigate to the project folder**

cd blog-post-api


**3. Install dependencies**

npm install


**4. Start the server**

node server.js


The server will run at:

http://localhost:3000


---

## 📌 API Endpoints

| Method | Endpoint     | Description             |
|--------|--------------|--------------------------|
| POST   | /posts       | Create a new blog post   |
| GET    | /posts/:id   | Get a blog post by ID    |

---

## 1️⃣ Create a Blog Post

**Endpoint**

POST /posts


**Headers**

Content-Type: application/json


**Request Body**
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of the blog post.",
  "author": "Hira Hasan"
}
```

**Success Response — 201 Created**
```json
{
  "message": "Blog post created successfully",
  "post": {
    "id": 1,
    "title": "My First Blog Post",
    "content": "This is the content of the blog post.",
    "author": "Hira Hasan",
    "createdAt": "2026-08-26T02:33:24.117Z"
  }
}
```

### 📸 Postman Test — Create Blog Post

![POST /posts - Create Blog Post](https://raw.githubusercontent.com/Badhon63/blog-post-api/main/Img/Screenshot%202026-08-26%20083344.png)

The screenshot shows the `POST /posts` request successfully creating a blog post and returning `201 Created`.

---

## 2️⃣ Get a Blog Post by ID

**Endpoint**

GET /posts/:id


**Example**

http://localhost:3000/posts/1


### 📸 Postman Test — Get Existing Post

![GET /posts/1 - Blog Post Found](https://raw.githubusercontent.com/Badhon63/blog-post-api/main/Img/Screenshot%202026-08-26%20083629.png)

The screenshot shows `GET /posts/1` successfully retrieving the blog post and returning `200 OK`.

**Success Response — 200 OK**
```json
{
  "id": 1,
  "title": "My First Blog Post",
  "content": "This is the content of the blog post.",
  "author": "Hira Hasan",
  "createdAt": "2026-08-26T02:33:24.117Z"
}
```

### 📸 Postman Test — Post Not Found

![GET /posts/99 - Not Found](https://raw.githubusercontent.com/Badhon63/blog-post-api/main/Img/Screenshot%202026-08-26%20083712.png)

The screenshot shows `GET /posts/99` returning `404 Not Found` because the requested blog post does not exist.

**Not Found Response — 404 Not Found**
```json
{
  "error": "Blog post with ID 99 not found"
}
```

---

## ❌ Validation Rules

| Field   | Rule                                   |
|---------|-----------------------------------------|
| title   | Required, minimum 3 characters          |
| content | Required, minimum 10 characters         |
| author  | Required, cannot be empty               |

**Validation Error Example — 400 Bad Request**
```json
{
  "error": "Title is required and must be at least 3 characters"
}
```

---

## 🗄️ Data Storage

This project uses simple **in-memory storage** — posts are stored in a JavaScript array:

```js
let posts = [];
let nextId = 1;
```

⚠️ Since data is stored in memory, all posts are lost when the server restarts. A database (like MongoDB) would be needed for permanent storage.

---

## 🧪 Testing the API

Tested using **Postman** with the following scenarios:
- ✅ Creating a valid blog post → 201 Created
- ✅ Retrieving an existing post by ID → 200 OK
- ✅ Retrieving a non-existent post ID → 404 Not Found

---

## 💻 Testing with cURL

**Create a Post**

curl -X POST http://localhost:3000/posts -H "Content-Type: application/json" -d "{"title":"My First Blog Post","content":"This is the content of the blog post.","author":"Hira Hasan"}"


**Get a Post**

curl http://localhost:3000/posts/1


---

## 🔮 Future Improvements

- [ ] Get all blog posts
- [ ] Update a blog post (PUT)
- [ ] Delete a blog post
- [ ] Database integration (MongoDB)
- [ ] Persistent storage

---

## 👨‍💻 Author

**Lima Akter Badhon**
Programming Hero — Full Stack Bootcamp
