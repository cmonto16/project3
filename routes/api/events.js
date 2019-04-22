const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");
const validateToken = require("../../middleware/validateToken");

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)
  .post(validateToken, eventsController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(validateToken, eventsController.update)
  .delete(eventsController.remove);

module.exports = router;