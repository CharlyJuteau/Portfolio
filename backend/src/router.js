const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const projectControllers = require("./controllers/projectControllers");

router.get("/project", projectControllers.browse);

const messageControllers = require("./controllers/messageControllers");

router.post("/message", messageControllers.add);

module.exports = router;
