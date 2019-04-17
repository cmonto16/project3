const router = require("express").Router();
const booksController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
