const router = require("express").Router();
const userRoutes = require("./users");
const eventsRoutes = require("./events")


router.use("/users", userRoutes);
router.use("/events",eventsRoutes);

module.exports = router;
