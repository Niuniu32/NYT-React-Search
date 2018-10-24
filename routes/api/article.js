const router = require("express").Router();
const articleControllers = require("../../controllers/articleControllers");

// Matches with "/api/books"
router.route("/")
  .get(articleControllers.findAll)
  .post(articleControllers.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(articleControllers.remove);

module.exports = router;
