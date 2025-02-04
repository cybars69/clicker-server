const express = require("express");

const scoresHandler = require("../jobs/scores");

const router = express.Router();

router.post("/click", scoresHandler.handleClick);
router.post("/reset", scoresHandler.handleReset);
router.get("/user", scoresHandler.handleGetScore);

module.exports = router;
