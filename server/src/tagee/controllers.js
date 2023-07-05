const pool = require("../../dbconfig");
const quaries = require("./quaries");

const getAllPosts = (req, res) => {
  pool.query(quaries.getAll, (err, results) => {
    if (err) throw err;
    res.send(results.rows);
  });
};

const getPostbyID = (req, res) => {
  pool.query(quaries.getById, [req.params.id], (err, results) => {
    if (err) throw err;
    res.send(results.rows);
  });
};

const getByTag = (req, res) => {
  pool.query(quaries.getByTag, [req.params.tag], (err, results) => {
    if (err) throw err;
    res.send(results.rows);
  });
};

const post = (req, res) => {
  const { name, description, tag, date } = req.body;
  pool.query(
    quaries.addPost,
    [name, description, tag, date],
    (err, results) => {
      if (err) throw err;
      res.status(201).send("updated post");
    }
  );
};

module.exports = { getAllPosts, getPostbyID, post, getByTag };
