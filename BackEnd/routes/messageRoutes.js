const express = require("express");
const router = express.Router();
const Database = require("../config/db");
const sendMessageToAI = require("../services/aiservices");


// Route send user message and store response

router.post("/send-message", async (req, res) => {
    const {message} = req.body;
})

