const express = require('express');
const router = express.Router();

const productsController = require('../app/controllers/ProductsController');

//product + '/:slug'

router.get('/combo/:slug',productsController.comboDetail);
router.post('/combo/:slug',productsController.postCart);
router.post('/drink/:slug',productsController.postCart);
router.get('/combo',productsController.combo);
router.get('/pizza/:slug',productsController.pizzaDetail);
router.get('/pizza',productsController.pizza);
router.post('/pizza/:slug',productsController.postCart);
router.get('/burger/:slug',productsController.burgerDetail);
router.get('/burger',productsController.burger);
router.get('/chicken/:slug',productsController.chickenDetail);
router.post('/burger/:slug',productsController.postCart);
router.get('/chicken',productsController.chicken);
router.post('/chicken/:slug',productsController.postCart);
router.get('/side-dishes/:slug',productsController.dinnerDetail);
router.post('/side-dishes/:slug',productsController.postCart);
router.get('/side-dishes',productsController.dinner);
router.get('/drink/:slug',productsController.drinkDetail);
router.get('/drink',productsController.drink);
//product + '/'
router.get('/',productsController.index);



module.exports = router;