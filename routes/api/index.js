const router = require("express").Router();
const bookRoutes = require("./gbooks");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
