import * as express from 'express';
import * as products from './others/json/products.json';

const router = express.Router();


/* Viewverlinkungen */

router.get("/", (req, res) => {
    res.render('home',
    {
        // Imports ins View
        products: products,
        totalProducts: req.session.cookie.basket.getAmmountOfItems()
    }
    
    );
});

router.get("/detail/:id", (req, res) => {
    const id = req.params.id;
    const currentproduct = products.find(p => p.id.toString() === id);
    res.render('detail',
    {
        // Imports ins View
        //products: products,
        product: currentproduct,
        totalProducts: req.session.cookie.basket.getAmmountOfItems()
    }
    
    );
});

module.exports = router;