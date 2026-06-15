const express = require("express");

const router = express.Router();

router.get("/question", (req, res) => {

    res.json({
        question: "What is the difference between let, const and var?"
    });

});

module.exports = router;