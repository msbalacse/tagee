const getAll = "SELECT * FROM posts";
const addPost =
  "INSERT INTO posts (name,description,tag,date) VALUES ($1,$2,$3,$4)";
const getById = "SELECT * FROM posts WHERE id = $1";
const getByTag = "SELECT * FROM posts WHERE tag = $1";

module.exports = { getAll, addPost, getById, getByTag };
