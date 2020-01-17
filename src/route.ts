import * as express from 'express';
import * as products from './others/json/products.json';

const router = express.Router();


/* Viewverlinkungen */

router.get('/', (req, res) => {
    res.render('home',
    {
        // Imports ins View
        products: products,
        totalProducts: req.session.cookie.basket.getAmmountOfItems()
    }
    
    );
});

router.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const currentproduct = products.find(p => p.id.toString() === id);
    res.render('detail',
    {
        // Imports ins View
        products: products,
        product: currentproduct,
        totalProducts: req.session.cookie.basket.getAmmountOfItems()
    }
    
    );
});

router.get('/basket', (req, res) => {
    res.render('basket',
    {
        // Imports ins View
        products: products,
        totalProducts: req.session.cookie.basket.getAmmountOfItems(),
        total: req.session.cookie.basket.getTotal()
    }
    
    );
})

router.get('/checkout', (req, res) => {
    res.render('checkout',
    {
        // Imports ins View
        products: products,
        totalProducts: req.session.cookie.basket.getAmmountOfItems()
    }
    
    );
})

router.post('/detail/:id', (req, res) =>{    
    req.session.cookie.basket.addProduct(products.find( p => p.id.toString() === req.params.id ));
    res.redirect('/');
})

router.post('/checkout', (req,res) => {
    req.session.cookie.basket.clearBasket();
    res.redirect('/');
})


module.exports = router;