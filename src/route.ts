import * as express from 'express';
import * as products from './others/json/products.json';

const router = express.Router();

/* Viewverlinkungen */

router.get("/", (req, res) => {
    res.render('home',
    {
        // Imports ins View
        products: products
    }
    
    );
});

router.get("/detail", (req, res) => {
    res.render('detail',
    {
        // Imports ins View
        products: products
    }
    
    );
});

module.exports = router;