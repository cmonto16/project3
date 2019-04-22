const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const validateToken = require("../../middleware/validateToken");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(validateToken, usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(validateToken, usersController.update)
  .delete(usersController.remove);

module.exports = router;
