const express = require('express');
const CustomerController = require('../controllers/CustomerController')
const AccountController = require('../controllers/AccountController')

const router = express.Router();

router.delete('/customers/:id', CustomerController.delete);
router.put('/customers/:id', CustomerController.edit);
router.get('/customers/:id/accounts', AccountController.listAccountsByCustomer); 
router.post('/accounts', AccountController.createAccount);
router.delete('/accounts/:id', AccountController.delete);
router.put('/accounts/withdraw', AccountController.withdraw);
router.put('/accounts/deposit', AccountController.deposit);
router.put('/accounts/transaction', AccountController.transaction);


module.exports = router;