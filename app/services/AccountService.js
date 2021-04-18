const AccountService = module.exports
const AccountRepository = require('../repositories/AccountRepository')
const CustomerRepository = require('../repositories/CustomerRepository')

AccountService.listAccountsByCustomer = async (customerId) => {
    //buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(customerId)

    //si la lista de resultados su tamaño es cero
    //es porque no existe un cliente con esa cedula 
    if(customerFound.length === 0){
        throw new Error('Customer does not exist')
    }

    //cuando se retorna directamente el resultado de una funcion que 
    //haya que esperar el resultado, no es necesario usar await..
    return AccountRepository.listAccountsByCustomer(customerId)
}

AccountService.create = async (account) => {
    //buscamos el cliente por id para verificar si existe
    const customerFound = await CustomerRepository.findById(account.customerid)

    //si la lista de resultados su tamaño es cero
    // es porque no existe un cliente con esa cedula 
    if(customerFound.length === 0){
        throw new Error('Customer does not exist')
    }

    //consultando las cuentas del cliente..., el id del cliente viene en el obj
    const accountsByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    //verificando que solo tenga hasta 3...
    if (accountsByCustomer.length >= 3){
        throw new Error('no more than 3 accounts...')
    }

    account.openedat = new Date(); //colocando la fecha de apertura 
    account.amount = 0; //colocando el saldo inicial
    await AccountRepository.create(account)
}

AccountService.delete = async (id) =>{

    const cuenta = await AccountRepository.findById(id)

    if(cuenta.length === 0){
        throw new Error('Account does not exist')
    }

    else{ 
        
        if (cuenta[0].amount > 0) {
        throw new Error("Account with money, can no be deletd");
    } else{
         await AccountRepository.delete(id)}
    }
}

AccountService.retiro = async (accountid, customerid, retiroDinero) =>{

    const account1 = await this.traerCuenta(customerid, accountid)

    var dineroCuenta1 = account1.amount
    var totalRetiro = dineroCuenta1-retiroDinero

    if(totalRetiro < 0){
        throw new Error('insufficient money')
    } else{
        account1.amount = totalRetiro

        await AccountRepository.withdraw(account1)
    }

}

AccountService.deposit = async (accountid, customerid, moneyDeposit) =>{

    const account1 = await this.traerCuenta(customerid, accountid)

    var dineroCuenta1 = account1.amount
    var totalDeposit = dineroCuenta1+moneyDeposit

    if(moneyDeposit == 0){
        throw new Error('Insert a value greater than zero')
    } else{

        account1.amount = totalDeposit

        await AccountRepository.deposit(account1)
    }
}


AccountService.traerCuenta = async (customerid, accountId) => {

    const buscarCuenta = await AccountRepository.listAccountsByCustomer(customerid)
    
    let cuentaBuscada = null
    
    for(i = 0; i < buscarCuenta.length; i++) {
        if (buscarCuenta[i].id === accountId) {
            cuentaBuscada = buscarCuenta[i];
        }
    }
             if (cuentaBuscada == null) {
                throw new Error("Account does not exist");
        }
            return cuentaBuscada;
        
    }

AccountService.transaction = async (dataCustomer) =>{

const originAccount = await this.traerCuenta(dataCustomer.customeridOrigin, dataCustomer.accountidOrigin)
const destinationAccount = await this.traerCuenta(dataCustomer.customeridDestination, dataCustomer.accountidDestination)

    var originAccountMoney = originAccount.amount
    var totalTransactionWit = originAccountMoney-dataCustomer.amountTransaction

    if(totalTransactionWit < 0){
        throw new Error('insufficient money, can not transfer')
    } else{
        originAccount.amount = totalTransactionWit

        await AccountRepository.transaction(originAccount)

        var destinationAccountMoney = destinationAccount.amount
        var totalTransactionDep = destinationAccountMoney+dataCustomer.amountTransaction

        destinationAccount.amount = totalTransactionDep

        await AccountRepository.transaction(destinationAccount)
    }
}
