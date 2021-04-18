const AccountController = module.exports
//importando el modulo de la logica..
const AccountService = require('../services/AccountService');

AccountController.listAccountsByCustomer = async (req, res, next) => {
    const params = req.params;

    try{
        const response = await AccountService.listAccountsByCustomer(params.id)

        //enviando respuesta al cliente que retorna la logica 
        res.send(response)
        //-----------------------------------------------
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async (req, res, next) =>{
    const body = req.body;

    try {
        await AccountService.create(body)
        res.send({message: 'account created'})
        //---------------------------------------
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.delete = async (req, res, next) =>{
    const params = req.params;

try{
    await AccountService.delete(params.id)
    res.send({message: 'account deleted'})
    //----------------------------------------
}catch(error){
    console.log({error});
    res.status(500).send({error: error.message}).end();
    next(error);
    }
}

AccountController.withdraw = async (req, res, next) =>{
    const body = req.body;

try{
    await AccountService.retiro(body.id, body.customerId, body.amount)
    res.send({message: 'successful withdraw'})
    //----------------------------------------
}catch(error){
    console.log({error});
    res.status(500).send({error: error.message}).end();
    next(error);
    }
}

AccountController.deposit = async (req, res, next) =>{
    const body = req.body;

try{
    await AccountService.deposit(body.id, body.customerId, body.amount)
    res.send({message: 'successful deposit'})
    //----------------------------------------
}catch(error){
    console.log({error});
    res.status(500).send({error: error.message}).end();
    next(error);
    }
}

AccountController.transaction = async (req, res, next) =>{
    const body = req.body;

try{
    await AccountService.transaction(body)
    res.send({message: 'successful transaction'})
    //----------------------------------------
}catch(error){
    console.log({error});
    res.status(500).send({error: error.message}).end();
    next(error);
    }
}