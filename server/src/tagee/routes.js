const { Router } = require("express");
const controllers = require("./controllers");

const router = Router();

router.get("/", controllers.getAllPosts);
router.post("/", controllers.post);
router.get("/:id", controllers.getPostbyID);
router.get("/tag/:tag", controllers.getByTag);

module.exports = router;
