import * as express from 'express';

const router = express.Router();

/* Viewverlinkungen */

router.get("/", (req, res) => {
    res.render('home');
});

router.get("/detail", (req, res) => {
    res.render('detail');
});

module.exports = router;