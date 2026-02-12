import express from "express";
const router = express.Router();

router.post("/test", (req, res) => {
    console.log("github webhook received");
    console.log(req.body);

    return res.status(200).json({ received: true });
});

export default router;
